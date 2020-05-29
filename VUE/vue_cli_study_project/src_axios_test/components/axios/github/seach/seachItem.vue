<template>
    <div id="seachPrject">
        <fieldset>
            <legend>axios-github-seach</legend>
            <seachInput/>
            <seachResultShow/>
        </fieldset>
    </div>
</template>
<script>
import seachInput from './seachInput'
import seachResultShow from './seachResultShow'
export default {
  name: 'seachProject',
  components: {
    seachInput,
    seachResultShow
  }
}
</script>
<style scoped>
    #seachPrject{
        width: 80vw;
        margin:5px auto;
    }
</style>
