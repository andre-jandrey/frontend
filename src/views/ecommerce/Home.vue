<!-- =========================================================================================
	File Name: Home.vue
	Description: eCommerce Wish List Page
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="ecommerce-wishlist-demo">
    <div class="vx-row m-0 p-0 mb-5">
       <div class="vx-col w-full ">
            <vx-card class="grid-view-item mb-base overflow-hidden" v-on="$listeners">
                <template slot="no-body">
                    <div class="flex justify-center py-4">
                        <img src="@/assets/images/pages/eCommerce/banner1.png" style="max-width: 100%; max-height:200px"/>
                    </div>
                </template>
            </vx-card>
        </div> 
    </div>

    <div class="items-grid-view vx-row match-height" v-if="items.length" appear>
            <div class="vx-col lg:w-1/4 md:w-1/3 sm:w-1/2 w-full" v-for="item in items" :key="item.id">
                <item-category :item="item"></item-category>

            </div>
        </div>

        <!-- IF NO ITEMS IN CART -->
        <vx-card title="You don't have any items in your wish list." v-else>
            teste 4
            <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
        </vx-card>
  </div>
</template>

<script>
const ItemCategory = () => import('./components/ItemCategory.vue')

export default {
    data() {
        return {
            items : [
                {
                    id: 1,
                    image: require("@/assets/images/pages/eCommerce/1.png"),
                    name: 'Nome da categoria',
                },
                {
                    id: 2,
                    image: require("@/assets/images/pages/eCommerce/2.jpeg"),
                    name: 'Nome da categoria',
                },
                {
                    id:3,
                    image: require("@/assets/images/pages/eCommerce/3.jpg"),
                    name: 'Nome da categoria',
                },
                {
                    id: 4,
                    image: require("@/assets/images/pages/eCommerce/4.jpg"),
                    name: 'Nome da categoria',
                }
            ]
        }
    },
    components: {
        ItemCategory
    },
    computed: {
        wishListitems() {
          return this.items.slice().reverse();
        },
        wishListitems2() {
            return this.$store.state.eCommerce.wishList.slice().reverse();
        },
        isInCart() {
            return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
        },
        isInWishList() {
            return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
        },
    },
    methods: {
        removeItemFromWishList(item) {
            this.$store.dispatch('eCommerce/toggleItemInWishList', item)
        },
        cartButtonClicked(item) {
            this.additemInCart(item);
            this.removeItemFromWishList(item);
        },
        additemInCart(item) {
            this.$store.dispatch('eCommerce/additemInCart', item)
        },
    }
}
</script>

<style lang="scss" scoped>
#ecommerce-wishlist-demo {
    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
        min-width: 50%;
    }

    .item-view-secondary-action-btn {
        min-width: 50%;
    }
}
</style>
