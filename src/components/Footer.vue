<template>
    <div class="content">
        <div id="footer" class="rounded shadow bg-secondary text-light">
            <div class="row gx-4 mt-4" >
                <div class="col-sm-6 col-12 p-4 text-start">
                    <p><font-awesome-icon icon="phone-square"></font-awesome-icon> 01506 825855</p>
                </div>   
                <div class="col-sm-6 col-12 p-4 text-start">
                    <p><font-awesome-icon icon="envelope-square"></font-awesome-icon> enquiries.railway@srps.org.uk</p>
                </div> 
            </div>
            <div class="row gx-4 mt-4" >
                <div class="col-12 p-4 text-start">
                    <ul class="list-unstyled">
                        <li><b>The Scottish Railway Preservantion Society</b></li>
                        <li>Operators of Bo’ness & Kinneil Railway and Museum of Scottish Railways</li>
                        <li>Scottish Charity No. SC002375</li>
                    </ul>
                </div>   
            </div>
            <div class="row gx-4 mt-4" >
                <div class="col p-4 text-start">
                    <router-link class="link-light text-decoration-none" to="/singlepage/terms"><small>Terms & Conditions</small></router-link>
                </div>   
                <div class="col p-4 text-start">
                    <router-link class="link-light text-decoration-none" to="/singlepage/privacy"><small>Data protection policy</small></router-link>
                </div> 
                <div class="col p-4 text-start">
                    <router-link class="link-light text-decoration-none" to="/singlepage/company"><small>Company details</small></router-link>
                </div> 
                <div class="col p-4 text-start">
                    <a class="link-light text-decoration-none" href="https://www.srps.org.uk/"><small>SRPS</small></a>
                </div> 
            </div>
        </div>

        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
        },
        mounted() {
            
        }
    }
</script>