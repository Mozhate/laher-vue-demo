<template>
  <div>
    <div @click="$router.push({path:'/'})">返回首页</div>
    <canvas ref="myCanvas" id="notHomeTopCanvas" width="900" height="600"></canvas>
  </div>
</template>

<script>
    import TweenLite from 'gsap'

    export default {
        name: "ShardGlass",
        data(){
            return{
            }
        },
        // 一定要放在挂载里面
        mounted() {
            const jsonstr = {
                "triW": 14,
                "triH": 20,
                "neighbours": ["side", "top", "bottom"],
                "speedTrailAppear": 0.1,
                "speedTrailDisappear": 0.1,
                "speedTriOpen": 1,
                "trailMaxLength": 30,
                "trailIntervalCreation": 100,
                "delayBeforeDisappear": 2,
                "colors": ["#96EDA6", "#5BC6A9", "#38668C", "#374D84", "#BED5CB", "#62ADC6", "#8EE5DE", "#304E7B"],
            };
            window.cnblogsConfig = {
                essayTopAnimation: jsonstr
            }
            let C, c, viewWidth, viewHeight, rectCanvas,
                triW = 14,
                triH = 20,
                neighbours = ["side", "top", "bottom"],
                speedTrailAppear = 0.1,
                speedTrailDisappear = 0.1,
                speedTriOpen = 1,
                trailMaxLength = 30,
                trailIntervalCreation = 100,
                delayBeforeDisappear = 2,
                cols, rows, tris, randomAlpha = true,
                colors = ["#96EDA6", "#5BC6A9", "#38668C", "#374D84", "#BED5CB", "#62ADC6", "#8EE5DE", "#304E7B"];

            let Triangle = function (pos, column, row) {
                let thisTri = this;
                this.selectedForTrail = false;
                this.pos = pos;
                this.col = column;
                this.row = row;
                this.alpha = this.tAlpha = 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.rgb = hexToRgb(this.color);
                this.opened = false;
                this.opening = false;
                this.closing = false;
                this.isLeft = (this.pos % 2);

                this.tX1 = (this.isLeft) ? (this.col + 1) * triW : this.col * triW;
                this.tX2 = (this.isLeft) ? this.col * triW : (this.col + 1) * triW;
                this.tX3 = (this.isLeft) ? (this.col + 1) * triW : this.col * triW;

                this.x1 = this.tX1;
                this.x2 = this.tX1;
                this.x3 = this.tX1;

                this.tY1 = .5 * this.row * triH;
                this.tY2 = .5 * (this.row + 1) * triH;
                this.tY3 = .5 * (this.row + 2) * triH;

                this.y1 = this.tY1;
                this.y2 = this.tY1;
                this.y3 = this.tY1;

                this.tweenClose, this.tweenOpen;
                this.draw = function () {
                    c.fillStyle = 'rgba(' + this.rgb.r + ',' + this.rgb.g + ',' + this.rgb.b + ',' + this.alpha + ')';
                    c.beginPath();
                    c.moveTo(this.x1, this.y1);
                    c.lineTo(this.x2, this.y2);
                    c.lineTo(this.x3, this.y3);
                    c.closePath();
                    c.fill();
                }

                this.open = function (direction, targetSpeed, targetAlpha, targetDelay) {

                    if (!this.opened || !this.opening) {
                        if (this.tweenClose) this.tweenClose.kill();
                        this.opening = true;
                        this.direction = direction || "top";
                        this.delay = targetDelay || 0;
                        this.tAlpha = targetAlpha;
                        this.tSpeed = targetSpeed || 1.5;
                        if (this.direction == "side") {
                            this.x1 = this.x2 = this.x3 = this.tX1;
                            this.y1 = this.tY1;
                            this.y2 = this.tY2;
                            this.y3 = this.tY3;
                        } else if (this.direction == "top") {
                            this.x1 = (this.tX2 + this.tX3) / 2;
                            this.x2 = this.tX2;
                            this.x3 = this.tX3;
                            this.y1 = (this.tY2 + this.tY3) / 2;
                            this.y2 = this.tY2;
                            this.y3 = this.tY3;
                        } else if (this.direction == "bottom") {
                            this.x1 = this.tX1;
                            this.x2 = this.tX2;
                            this.x3 = (this.tX1 + this.tX2) / 2;
                            this.y1 = this.tY1;
                            this.y2 = this.tY2;
                            this.y3 = (this.tY1 + this.tY2) / 2;
                        }
                        this.tweenOpen = TweenLite.to(this, this.tSpeed, {
                            x1: this.tX1,
                            x2: this.tX2,
                            x3: this.tX3,
                            y1: this.tY1,
                            y2: this.tY2,
                            y3: this.tY3,
                            alpha: this.tAlpha,
                            // ease: Strong.easeInOut,
                            delay: this.delay,
                            onComplete: openComplete,
                            onCompleteParams: [thisTri]
                        });
                    }
                }

                this.close = function (direction, targetSpeed, targetDelay) {
                    //if (this.opened) {
                    this.direction = direction || "top";
                    this.delay = targetDelay || 1;
                    this.tSpeed = targetSpeed || .8;
                    this.opened = false;
                    this.closing = true;
                    let closeX1, closeX2, closeX3, closeY1, closeY2, closeY3;

                    if (this.direction == "side") {
                        closeX1 = closeX2 = closeX3 = this.tX1;
                        closeY1 = this.tY1;
                        closeY2 = this.tY2;
                        closeY3 = this.tY3;
                    } else if (this.direction == "top") {
                        closeX1 = (this.tX2 + this.tX3) / 2;
                        closeX2 = this.tX2;
                        closeX3 = this.tX3;
                        closeY1 = (this.tY2 + this.tY3) / 2;
                        closeY2 = this.tY2;
                        closeY3 = this.tY3;
                    } else if (this.direction == "bottom") {
                        closeX1 = this.tX1;
                        closeX2 = this.tX2;
                        closeX3 = (this.tX1 + this.tX2) / 2;
                        closeY1 = this.tY1;
                        closeY2 = this.tY2;
                        closeY3 = (this.tY1 + this.tY2) / 2;
                    }
                    if (this.tweenClose) this.tweenClose.kill();
                    this.tweenClose = TweenLite.to(this, this.tSpeed, {
                        x1: closeX1,
                        x2: closeX2,
                        x3: closeX3,
                        y1: closeY1,
                        y2: closeY2,
                        y3: closeY3,
                        alpha: 0,
                        // ease: Strong.easeInOut,
                        delay: this.delay,
                        onComplete: closeComplete,
                        onCompleteParams: [thisTri]
                    });
                }
            }

            function openComplete(tri) {
                tri.opened = true;
                tri.opening = false;
                tri.closing = false;
            }

            function closeComplete(tri) {
                tri.opened = false;
                tri.opening = false;
                tri.closing = false;
            }

            function unselectTris() {
                for (let i = 0; i < tris.length; i++) {
                    tris[i].selectedForTrail = false;
                }
            }

            function createTrail() {
                unselectTris();
                let currentTri;
                let trailLength = Math.floor(Math.random() * trailMaxLength - 2) + 2;
                let index = Math.round(Math.random() * tris.length);
                let startTri = tris[index];
                if (typeof (startTri) != "undefined" && typeof (startTri.selectedForTrail) != "undefined") {
                    startTri.selectedForTrail = true;
                } else {
                    return false;
                }
                currentTri = {
                    tri: startTri,
                    openDir: "side",
                    closeDir: "side"
                };

                for (let i = 0; i < trailLength; i++) {
                    let o = getNeighbour(currentTri.tri);
                    let opacity;
                    if (o != null) {
                        o.tri.selectedForTrail = true;
                        if (randomAlpha) {
                            opacity = (Math.random() < .8) ? Math.random() * .5 : 1;
                        } else {
                            opacity = 1;
                        }
                        currentTri.tri.closeDir = o.openDir;
                        currentTri.tri.open(currentTri.openDir, speedTriOpen, opacity, i * speedTrailAppear);
                        currentTri.tri.close(currentTri.closeDir, 1, delayBeforeDisappear + i * speedTrailDisappear);
                        currentTri = o;
                    } else {
                        currentTri.tri.open(currentTri.openDir, speedTriOpen, opacity, (i + 1) * speedTrailAppear);
                        currentTri.tri.close(currentTri.closeDir, 1, delayBeforeDisappear + (i + 1) * speedTrailDisappear);
                        break;
                    }
                }
            }

            function getNeighbour(t) {
                shuffleArray(neighbours);
                for (let i = 0; i < neighbours.length; i++) {
                    if (neighbours[i] == "top") {
                        if (t.row != 0 && !tris[t.pos - cols].selectedForTrail && !tris[t.pos - cols].opened) {
                            return {
                                tri: tris[t.pos - cols],
                                openDir: "top",
                                closeDir: "top"
                            };
                        }

                    } else if (neighbours[i] == "bottom") {
                        if (t.row != rows - 1 && !tris[t.pos + cols].selectedForTrail && !tris[t.pos + cols].opened) {
                            return {
                                tri: tris[t.pos + cols],
                                openDir: "bottom",
                                closeDir: "top"
                            };
                        }
                    } else {
                        if (t.isLeft && t.col != cols - 1 && !tris[t.pos + 1].selectedForTrail && !tris[t.pos + 1].opened) {
                            return {
                                tri: tris[t.pos + 1],
                                openDir: "side",
                                closeDir: "top"
                            };
                        } else if (!t.isLeft && t.col != 0 && !tris[t.pos - 1].selectedForTrail && !tris[t.pos - 1].opened) {
                            return {
                                tri: tris[t.pos - 1],
                                openDir: "side",
                                closeDir: "top"
                            };
                        }
                    }
                }
                return null;
            }

            function draw() {
                c.clearRect(0, 0, C.width, C.height);
                for (let i = 0; i < tris.length; i++) {
                    tris[i].draw();
                }
            }

            function handleResize() {
                viewWidth = C.width = C.scrollWidth;
                viewHeight = C.height = C.scrollHeight;
                rectCanvas = C.getBoundingClientRect();
                start();
            }

            function hexToRgb(hex) {
                let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }

            function shuffleArray(o) {
                for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
                return o;
            }

            C = this.$refs.myCanvas
            c = C.getContext('2d')
            viewWidth = C.width = C.scrollWidth
            viewHeight = C.height = C.scrollHeight
            initParams();
            window.addEventListener("resize", handleResize);
            TweenLite.ticker.add(draw)
            handleResize();

            function initParams() {
                cols = Math.floor(viewWidth / triW);
                cols = (cols % 2) ? cols : cols - 1; // => keep it odd
                rows = Math.floor(viewHeight / triH) * 2;
                tris = [];
            }

            function initGrid() {
                for (let j = 0; j < rows; j++) {
                    for (let i = 0; i < cols; i++) {
                        let pos = i + (j * cols);
                        let triangle = new Triangle(pos, i, j);
                        tris.push(triangle);
                        triangle.draw();
                    }
                }
            }

            let interval;

            function start() {
                if (interval) clearInterval(interval);
                initParams();
                initGrid();
                interval = setInterval(createTrail, trailIntervalCreation);
                createTrail();
            }
        }
    }
</script>

<style scoped>

</style>
