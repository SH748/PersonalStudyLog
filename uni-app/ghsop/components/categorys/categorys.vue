<template>
	<view class="categorysContainer">
		<image class="categoryImg" :src="category.titlePicUrl" mode=""></image>
		<scroll-view scroll-x="true" class="categoryList">
			<view class="categoryItem" v-for="scrollItem in category.itemList" :key="scrollItem.id">
				<image :src="scrollItem.showPicUrl" mode=""></image>
				<view class="itemText">{{scrollItem.name}}</view>
			</view>
			<view class="categoryItem more">
				查看更多>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			category:Object
		}
	}
</script>

<style lang="stylus">
.categorysContainer
	margin-top 20upx
	.categoryImg
		width 100%
		height 370upx
	.categoryList
		white-space nowrap
		.categoryItem
			display inline-block
			width 200upx
			margin 10upx 20upx
			font-size 24upx
			&.more
				background #eee
				width 200upx
				height 200upx
				line-height 200upx
				text-align center
				vertical-align top
			image
				width 200upx
				height 200upx
				background-color #eee
			.itemText
				display -webkit-box
				-webkit-line-clamp 2
				-webkit-box-orient vertical
				overflow hidden
				height 64upx
				white-space pre-wrap
</style>
