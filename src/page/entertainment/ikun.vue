<script></script>

<template>
    <div class="page-body">
        <main id="main">
            <div class="ikun">
                <div class="ikun-top">
                    <div class="ikun-top-one"></div>
                    <div class="ikun-top-two"></div>
                    
                </div>
                <div class="ikun-bottom"></div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.ikun {
    z-index: -1;
    position: absolute;
    inset: 0;
    background-color: #E6E4FE;
}
.ikun-top {
    height: 80dvh;
    position: relative;

}
.ikun-bottom {
    height: 20dvh;
    background-color: #cec3c1;
}
.ikun-top-one {
    position: absolute;
    width: 375px;
    top: 24px;
    left: -154px;
    border-bottom: 110px solid #7f83db;
    border-right: 110px solid transparent;
    transform: rotate(45deg);
}
.ikun-top-two {
    position: absolute;
    width: 673px;
    top: 295px;
    left: -187px;
    border-bottom: 110px solid #93cae4;
    border-right: 110px solid transparent;
    transform: rotate(45deg);
}
@media screen and (max-width: 768px) {
    .ikun-top-one {
        position: absolute;
        width: 275px;
        top: 24px;
        left: -154px;
        border-bottom: 90px solid #7f83db;
        border-right: 90px solid transparent;
        transform: rotate(45deg);
    }
    .ikun-top-two {
        position: absolute;
        width: 473px;
        top: 215px;
        left: -187px;
        border-bottom: 90px solid #93cae4;
        border-right: 90px solid transparent;
        transform: rotate(45deg);
    }
}
</style>