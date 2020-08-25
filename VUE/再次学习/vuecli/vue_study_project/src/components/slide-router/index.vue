<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Tree, Row, Col } from 'element-ui'
export default {
  name: 'App',
  components: {
    'el-row': Row,
    'el-col': Col,
    'el-tree': Tree,
  },
  data() {
    return {
      data: [
        {
          label: '基础',
          children: [
            {
              label: 'methods',
            },
            {
              label:"computed"
            }
          ],
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1',
                },
              ],
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
  },
}
</script>

<style>
</style>
