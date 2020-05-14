<!-- =========================================================================================
	File Name: ECommerceWishList.vue
	Description: eCommerce Wish List Page
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="ecommerce-wishlist-demo">
    <div class="vx-row m-0 p-0 mb-5">
       <div class="vx-col w-full text-center">
           <img src="@/assets/images/pages/eCommerce/banner1.png" width="80%" style="max-height:200px" />
            <!--  <vs-input class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg" placeholder="Pesquisar" v-model="currentRefinement" @input="refine($event)" @keyup.esc="refine('')" size="large" />-->
        </div> 
    </div>

    <div class="items-grid-view vx-row match-height" v-if="items.length" appear>
            <div class="vx-col lg:w-1/4 md:w-1/3 sm:w-1/2 w-full" v-for="item in items" :key="item.objectID">
                <item-grid-view :item="item">

                    <!-- SLOT: ACTION BUTTONS -->
                    <template slot="action-buttons">
                        <div class="flex flex-wrap">

                            <!-- PRIMARY BUTTON : REMOVE --
                            <div
                                class="item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer"
                                @click="removeItemFromWishList(item)">
                                <feather-icon icon="XIcon" svgClasses="h-4 w-4" />

                                <span class="text-sm font-semibold ml-2">REMOVE</span>
                            </div>-->

                            <!-- SECONDARY BUTTON: MOVE TO CART -->
                            <div
                                class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
                                @click="cartButtonClicked(item)">
                                <feather-icon icon="ShoppingBagIcon" svgClasses="h-4 w-4" />

                                <span class="text-sm font-semibold ml-2">COMPRAR</span>
                            </div>
                        </div>
                    </template>
                </item-grid-view>

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
const ItemGridView = () => import('./components/ItemGridView.vue')

export default {
    data() {
        return {
            items : [{
                objectID: 0,
                image: require("@/assets/images/pages/eCommerce/1.jpeg"),
                name: 'teste',
                rating: 4,
                price: 498.00,
                name: 'Nome do curso',
                description : 'brave descrição'
            },
             {
                objectID: 1,
                image: require("@/assets/images/pages/eCommerce/2.jpeg"),
                name: 'teste',
                rating: 3,
                price: 380.00,
                name: 'Nome do curso',
                description : 'brave descrição'
            },
             {
                objectID:2,
                image: require("@/assets/images/pages/eCommerce/3.jpeg"),
                name: 'teste',
                rating: 3,
                price: 760.00,
                name: 'Nome do curso',
                description : 'brave descrição'
            },
             {
                objectID: 3,
                image: require("@/assets/images/pages/eCommerce/4.jpeg"),
                name: 'teste',
                rating: 5,
                price: 1150.00,
                name: 'Nome do curso',
                description : 'brave descrição'
            }]
        }
    },
    components: {
        ItemGridView
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
