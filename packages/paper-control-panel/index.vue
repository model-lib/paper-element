<template>
    <svg :height="height" :width="width">
        <g @click="topClick" class="top" >
            <path  d="M75,0 a75,75 0 0,0 -75,75 L45,75 a30,30 0 0,1 30,-30  "  :fill="fillColor" :stroke="strokeColor" stroke-width="2" />
            <path d="M30 30 L50 35 L35 50 "></path>
        </g>
        <g  @click="rightClick" class="right" >
            <path d="M75,0 a75,75 0 0,0 -75,75 L45,75 a30,30 0 0,1 30,-30  " :fill="fillColor" :stroke="strokeColor" stroke-width="2" />
            <path d="M30 30 L50 35 L35 50 "></path>
        </g>
        <g  @click="bottomClick" class="bottom" >
            <path d="M75,0 a75,75 0 0,0 -75,75 L45,75 a30,30 0 0,1 30,-30  " :fill="fillColor" :stroke="strokeColor" stroke-width="2" />
            <path d="M30 30 L50 35 L35 50 "></path>
        </g>
        <g @click="leftClick" class="left" >
            <path d="M75,0 a75,75 0 0,0 -75,75 L45,75 a30,30 0 0,1 30,-30  " :fill="fillColor" :stroke="strokeColor" stroke-width="2" />
            <path d="M30 30 L50 35 L35 50 "></path>
        </g>
    </svg>
</template>

<script>
	export default {
		name: 'paper-control-panel',
		props: {
			width: {
				type: String,
				default: '155'
			},
			height: {
				type: String,
				default: '155'
			},
			fillColor: {
				type: String,
				// default: '#5e5e5e'
				default: 'rgba(0,0,0,0.3)'
			},
			strokeColor: {
				type: String,
				default: '#5e5e5e'
			}
        },
		methods: {
			topClick(){
				this.$emit('click', 'top')
				console.log(111)
			},
			rightClick(){
				this.$emit('click', 'right')
			},
			bottomClick(){
				this.$emit('click', 'bottom')
			},
			leftClick(){
				this.$emit('click', 'left')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.top{
		transform:translateX(75px) translateY(-28px) rotateZ(45deg);
	}
	.right{
		transform:translateX(180px) translateY(77px) rotateZ(135deg);
	}
	.bottom{
		transform:translateX(75px) translateY(182px) rotateZ(225deg);
	}
	.left{
		transform:translateX(-30px) translateY(77px) rotateZ(315deg);
	}
	
	.top:active, .right:active, .bottom:active, .left:active{
		fill: rgba(0,0,0,0.5);
		stroke: rgb(219, 219, 199);
		path{
			fill: rgba(0,0,0,0.5);
		}
	}
</style>
