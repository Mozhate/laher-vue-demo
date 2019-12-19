<template>
  <div>
    <markdown-run
      :mark="markdownTxt"
      highlight-style-file-name="github"
      @error=""
    />
  </div>
</template>
<script>
    export default {
        data(){
            return{
                markdownTxt:'111111111'
            }
        },
    }
</script>
