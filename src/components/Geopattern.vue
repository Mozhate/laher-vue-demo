<template>
  <div>
    <img :src="data">
    <textarea>{{css}}</textarea>
    <div id="url" :style="{'background':css}">
      {{css}}
    </div>
    <div class="cssurl" :style="{'background':cssurl}">

    </div>
  </div>
</template>

<script>
  import GeoPattern from 'geopattern'
  export default {
    data(){
      return {
        cssurl:'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTUiIGhlaWdodD0iMzU1Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2IoMTQ2LDY5LDYxKSI+PC9yZWN0PjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM1NSIgY3k9IjAiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wODkzMzMzMzMzMzMzMzMzMyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMCIgY3k9IjM1NSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA4OTMzMzMzMzMzMzMzMzMzIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIzNTUiIGN5PSIzNTUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wODkzMzMzMzMzMzMzMzMzMyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNTkuMTY2NjY2NjY2NjY2NjY0IiBjeT0iMCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA3MjAwMDAwMDAwMDAwMDAxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSI1OS4xNjY2NjY2NjY2NjY2NjQiIGN5PSIzNTUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wNzIwMDAwMDAwMDAwMDAwMSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTE4LjMzMzMzMzMzMzMzMzMzIiBjeT0iMCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjE1Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxMTguMzMzMzMzMzMzMzMzMzMiIGN5PSIzNTUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xNSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTc3LjUiIGN5PSIwIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDgwNjY2NjY2NjY2NjY2NjYiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE3Ny41IiBjeT0iMzU1IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDgwNjY2NjY2NjY2NjY2NjYiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIzNi42NjY2NjY2NjY2NjY2NiIgY3k9IjAiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xNDEzMzMzMzMzMzMzMzMzNCI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjM2LjY2NjY2NjY2NjY2NjY2IiBjeT0iMzU1IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iMCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA1NDY2NjY2NjY2NjY2NjY3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIyOTUuODMzMzMzMzMzMzMzMyIgY3k9IjM1NSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA1NDY2NjY2NjY2NjY2NjY3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIwIiBjeT0iNTkuMTY2NjY2NjY2NjY2NjY0IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIzNTUiIGN5PSI1OS4xNjY2NjY2NjY2NjY2NjQiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wNDYiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU5LjE2NjY2NjY2NjY2NjY2NCIgY3k9IjU5LjE2NjY2NjY2NjY2NjY2NCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA4MDY2NjY2NjY2NjY2NjY2Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxMTguMzMzMzMzMzMzMzMzMzMiIGN5PSI1OS4xNjY2NjY2NjY2NjY2NjQiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xNSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTc3LjUiIGN5PSI1OS4xNjY2NjY2NjY2NjY2NjQiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjM2LjY2NjY2NjY2NjY2NjY2IiBjeT0iNTkuMTY2NjY2NjY2NjY2NjY0IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTA2NjY2NjY2NjY2NjY2NjciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iNTkuMTY2NjY2NjY2NjY2NjY0IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDYzMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjAiIGN5PSIxMTguMzMzMzMzMzMzMzMzMzMiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMzU1IiBjeT0iMTE4LjMzMzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTA2NjY2NjY2NjY2NjY2NjciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU5LjE2NjY2NjY2NjY2NjY2NCIgY3k9IjExOC4zMzMzMzMzMzMzMzMzMyIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA4MDY2NjY2NjY2NjY2NjY2Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxMTguMzMzMzMzMzMzMzMzMzMiIGN5PSIxMTguMzMzMzMzMzMzMzMzMzMiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xNSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTc3LjUiIGN5PSIxMTguMzMzMzMzMzMzMzMzMzMiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMjQwMDAwMDAwMDAwMDAwMSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjM2LjY2NjY2NjY2NjY2NjY2IiBjeT0iMTE4LjMzMzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iMTE4LjMzMzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDI4NjY2NjY2NjY2NjY2NjY3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIwIiBjeT0iMTc3LjUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wNjMzMzMzMzMzMzMzMzMzNCI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMzU1IiBjeT0iMTc3LjUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wNjMzMzMzMzMzMzMzMzMzNCI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNTkuMTY2NjY2NjY2NjY2NjY0IiBjeT0iMTc3LjUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xMzI2NjY2NjY2NjY2NjY2NSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTE4LjMzMzMzMzMzMzMzMzMzIiBjeT0iMTc3LjUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wMjg2NjY2NjY2NjY2NjY2NjciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE3Ny41IiBjeT0iMTc3LjUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xMzI2NjY2NjY2NjY2NjY2NSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjM2LjY2NjY2NjY2NjY2NjY2IiBjeT0iMTc3LjUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xMzI2NjY2NjY2NjY2NjY2NSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjk1LjgzMzMzMzMzMzMzMzMiIGN5PSIxNzcuNSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjEyNDAwMDAwMDAwMDAwMDAxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIwIiBjeT0iMjM2LjY2NjY2NjY2NjY2NjY2IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTE1MzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM1NSIgY3k9IjIzNi42NjY2NjY2NjY2NjY2NiIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjExNTMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI1OS4xNjY2NjY2NjY2NjY2NjQiIGN5PSIyMzYuNjY2NjY2NjY2NjY2NjYiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wOTgiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjExOC4zMzMzMzMzMzMzMzMzMyIgY3k9IjIzNi42NjY2NjY2NjY2NjY2NiIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjE0MTMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzcuNSIgY3k9IjIzNi42NjY2NjY2NjY2NjY2NiIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjEwNjY2NjY2NjY2NjY2NjY3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIyMzYuNjY2NjY2NjY2NjY2NjYiIGN5PSIyMzYuNjY2NjY2NjY2NjY2NjYiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xNDEzMzMzMzMzMzMzMzMzNCI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjk1LjgzMzMzMzMzMzMzMzMiIGN5PSIyMzYuNjY2NjY2NjY2NjY2NjYiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMCIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM1NSIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU5LjE2NjY2NjY2NjY2NjY2NCIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTA2NjY2NjY2NjY2NjY2NjciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjExOC4zMzMzMzMzMzMzMzMzMyIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzcuNSIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDgwNjY2NjY2NjY2NjY2NjYiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIzNi42NjY2NjY2NjY2NjY2NiIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDgwNjY2NjY2NjY2NjY2NjYiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iMjk1LjgzMzMzMzMzMzMzMzMiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wNzIwMDAwMDAwMDAwMDAwMSI+PC9jaXJjbGU+PC9zdmc+")',
        data:null,
        css:null,
      }
    },
    created(){
      const pattern = GeoPattern.generate('ia');
      this.css = pattern.toDataUrl()
      this.data = pattern.toDataUri()
      console.log(pattern.toBase64())
    }
  }
</script>

<style scoped>
#url{
  width: 1000px;
  height: 500px;
  border: 1px solid #00a8c6;
}
.cssurl{
  width: 1000px;
  height: 500px;
  border: 1px solid #00a8c6;
}
</style>
