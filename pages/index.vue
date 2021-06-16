<template>
  <div>
    <section class="bg-green-300">
      <div class="description panel blue bg-green-300">
        <div class="p-20">
          <h1>Scrub animations</h1>
          <p>
            A ScrollTrigger with <code>scrub: true</code> links the scroll
            position to an animation's progress, making the scroll bar act like
            a scrubber while it's between the ScrollTrigger's
            <code>start</code> and <code>end</code>.
          </p>
          <div class="scroll-down">
            Scroll down
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="panel bg-red-400 red">
      <p>
        <span class="line line-1"></span>This line's animation will begin when
        it enters the viewport and finish when its top edge hits the top of the
        viewport, staying perfectly in sync with the scrollbar because it has
        <code>scrub:&nbsp;true</code>
      </p>
    </section>

    <section class="panel bg-orange-400 orange">
      <p>
        <span class="line line-2"></span>This orange panel gets pinned when its
        top edge hits the top of the viewport, then the line's animation is
        linked with the scroll position until it has traveled 100% of the
        viewport's height (<code>end: "+=100%"</code>), then the orange panel is
        unpinned and normal scrolling resumes. Padding is added automatically to
        push the rest of the content down so that it catches up with the scroll
        when it unpins. You can set <code>pinSpacing: false</code> to prevent
        that if you prefer.
      </p>
    </section>

    <section class="panel bg-purple-400 purple">
      <p>
        <span class="line line-3"></span>This panel gets pinned in a similar
        way, and has a more involved animation that's wrapped in a timeline,
        fading the background color and animating the transforms of the
        paragraph in addition to the line, all synced with the scroll position
        perfectly.
      </p>
    </section>

    <section class="panel gray">DONE!</section>
  </div>
</template>

<script>
// typical import
import gsap from 'gsap'

// or get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  name: 'Home',

  data() {
    return {}
  },

  methods: {
    initAnimation() {
      gsap.registerPlugin(ScrollTrigger)

      // --- RED PANEL ---
      gsap.from('.line-1', {
        scrollTrigger: {
          trigger: '.line-1',
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      })

      // --- ORANGE PANEL ---
      gsap.from('.line-2', {
        scrollTrigger: {
          trigger: '.orange',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=100%',
        },
        scaleX: 0,
        autoAlpha: 0,
        transformOrigin: 'left center',
        ease: 'none',
      })

      // --- PURPLE/GREEN PANEL ---
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.purple',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=100%',
        },
      })

      tl.from('.purple p', {
        scale: 0.3,
        rotation: 45,
        autoAlpha: 0,
        ease: 'power2',
      })
        .from(
          '.line-3',
          { scaleX: 0, transformOrigin: 'left center', ease: 'none' },
          0
        )
        .to('.purple', { backgroundColor: '#28a92b' }, 0)
    },
  },

  mounted() {
    this.initAnimation()
  },
}
</script>
<style scoped>
section {
  height: 100vh;
}
.line {
  width: 100%;
  max-width: 800px;
  height: 8px;
  margin: 0 0 10px 0;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 1);
}
</style>
