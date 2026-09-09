import { ref, watch, onBeforeUnmount, nextTick } from 'vue'

/**
 * Reusable horizontal carousel/scroll logic.
 * Works with any scrollable track ref and supports mouse drag + touch swipe.
 */
export function useCarousel() {
  const trackRef = ref(null)
  const isDragging = ref(false)
  const canScrollPrev = ref(false)
  const canScrollNext = ref(false)
  let startX = 0
  let scrollStart = 0

  const updateScrollState = () => {
    const el = trackRef.value
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    canScrollPrev.value = el.scrollLeft > 4
    canScrollNext.value = el.scrollLeft < maxScroll - 4
  }

  watch(trackRef, (el, _prev, onCleanup) => {
    if (!el) return
    nextTick(updateScrollState)
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    onCleanup(() => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScrollState)
  })

  const scrollByAmount = (amount) => {
    if (!trackRef.value) return
    trackRef.value.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const scrollNext = () => {
    if (!trackRef.value) return
    const cardWidth = trackRef.value.firstElementChild?.offsetWidth || 300
    scrollByAmount(cardWidth + 24)
  }

  const scrollPrev = () => {
    if (!trackRef.value) return
    const cardWidth = trackRef.value.firstElementChild?.offsetWidth || 300
    scrollByAmount(-(cardWidth + 24))
  }

  const onPointerDown = (event) => {
    if (!trackRef.value) return
    isDragging.value = true
    startX = event.touches ? event.touches[0].clientX : event.clientX
    scrollStart = trackRef.value.scrollLeft
  }

  const onPointerMove = (event) => {
    if (!isDragging.value || !trackRef.value) return
    const x = event.touches ? event.touches[0].clientX : event.clientX
    const delta = x - startX
    trackRef.value.scrollLeft = scrollStart - delta
  }

  const onPointerUp = () => {
    isDragging.value = false
  }

  return {
    trackRef,
    canScrollPrev,
    canScrollNext,
    scrollNext,
    scrollPrev,
    onPointerDown,
    onPointerMove,
    onPointerUp
  }
}
