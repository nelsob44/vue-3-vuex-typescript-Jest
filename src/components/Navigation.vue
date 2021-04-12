<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fchristmas-free-icon-pack%2F128%2Fhouse-128.png&f=1&nofb=1"/></a>
             <div class="image_div">
                <div class="img">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TAGCfZHqdPV2G8neh6E2ewHaE7%26pid%3DApi&f=1"
                        alt="Cristiano Ronaldo"
                    />
                </div>
                <div class="image_div_text">Austin Fisher</div>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="material-icons-outlined">
                &#x25BC;
                </span>
            </button>
        </div>
    </nav>    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation'
});
</script>
<style lang="scss" scoped>
.navbar {
    z-index: 1;
    .container-fluid {
        .navbar-brand {
            float: left;
            color: white;
            background-color: white;
            img {
                color: white;
                height: 40px;
                width: 40px;
                z-index: 200;
            }
        }
        .image_div {
            display: flex;
            flex-wrap: wrap;
            position: absolute;
            right: 15%;
            width: 140px;
            .image_div_text {
                position: absolute;
                top: 40%;
                left: 40%;
                width: 80px;
                color: white;
                flex: 60%;
                font-size: 0.7rem;
            }
            .img {
                flex: 15%;
                max-width: 50px;
                img {
                    max-width: 45px;
                    height: 45px;
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>
