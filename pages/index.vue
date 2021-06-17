<template>
  <div>
    
    <section class="w-screen space-y-2 text-center">
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
      <div class="h-12 py-4 border border-blue-300 rounded-xl w-26 svgRectangle"></div>
     
              <button @click="animateBars" class="px-12 py-3 mx-auto border border-black hover:bg-black hover:text-white">animate</button>

    </section>
    <section class="w-screen space-y-2 overflow-x-hidden text-center section2">
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
      <div class="h-12 py-4 border border-blue-600 rounded-xl w-26 svgRectangle2"></div>
     

    </section>
    <section class="grid h-screen place-items-center">
      <div class="text-6xl"> <h1 class="spin">😲</h1> </div>
      <div class="relative flex text-6xl pl-26 pt-36 extrabold">
        <h1 class="relative letter" style="left:-270px">M</h1>
        <h1 class="relative letter" style="left:-260px">i</h1>
        <h1 class="relative letter" style="left:-250px">l</h1>
        <h1 class="relative letter" style="left:-240px">t</h1>
        <h1 class="relative letter" style="left:-236px">o</h1>
        <h1 class="relative letter" style="left:-210px">n</h1>
        <h1 class="relative mx-4 letter" style="left:-200px"> </h1>
        <h1 class="relative letter" style="left:-170px">M</h1>
        <h1 class="relative letter" style="left:-160px">a</h1>
        <h1 class="relative letter" style="left:-150px">n</h1>
        <h1 class="relative letter" style="left:-140px">n</h1>
        <h1 class="relative letter" style="left:-130px">a</h1>
        <h1 class="relative letter" style="left:-120px">r</h1>
        <h1 class="relative letter" style="left:-110px">i</h1>
        <h1 class="relative letter" style="left:-100px">n</h1>
        <h1 class="relative letter" style="left:-89px">o</h1>
      </div>
    </section>
    <section class="grid h-screen place-items-center lastSection">
      <div class="relative flex extrabold">
        <h1 class="text-6xl text-white transition-all duration-500 hover:text-blue-300">RadishLab_GSAP_Test</h1>
      </div>
    </section>
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
    animateBars(){
      const svgss = gsap.utils.toArray('.svgRectangle')
      svgss.forEach((svg,ind) => {
        
      gsap.to(svg, {
       
        width: Math.random()* 1000 ,
        transformOrigin: 'left center',
        ease: 'none',
      })
      });
    },
    initAnimation() {
      gsap.registerPlugin(ScrollTrigger)

      const svgss = gsap.utils.toArray('.svgRectangle2')
      svgss.forEach((svg,ind) => {
      gsap.to(svg, {
        scrollTrigger: {
          trigger: svg,
          scrub: true,
          start: 'top bottom',
          end: 'bottom center',
        },
        width: Math.random()* 170 * ind,
        backgroundColor:'black',
        transformOrigin: 'left center',
        ease: 'none',
      })
      })
      const letters = gsap.utils.toArray('.letter')
      letters.forEach((letter,ind) => {
      gsap.from(letter, {
        scrollTrigger: {
          trigger: letter,
          scrub: true,
          start: 'top bottom',
          end: 'top center',
        },
        top: Math.random()* 30 * ind,
        left: Math.random()* 10 * ind,
        opacity:0,
        transformOrigin: 'left center',
        ease: 'none',
      })
      });
      gsap.from('.spin',{
        scrollTrigger: {
          trigger: '.spin',
          scrub: true,
          start: 'top bottom',
          end: 'center top',
        },
        rotate:400
      });
      gsap.to('.lastSection',{
        scrollTrigger: {
          trigger: '.lastSection',
          scrub: true,
          start: 'top bottom',
          end: 'center top',
        },
        backgroundColor:'black'
      })
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
