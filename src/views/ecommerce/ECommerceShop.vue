<!-- =========================================================================================
  File Name: ECommerceShop.vue
  Description: eCommerce Shop Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="algolia-content-container" class="relative clearfix">
      <vs-sidebar class="items-no-padding vs-sidebar-rounded background-absolute" parent="#algolia-content-container" :click-not-close="clickNotClose" :hidden-background="clickNotClose" v-model="isFilterSidebarActive">
        <div class="p-6 filter-container">
          <!-- TYPE -->
          <h6 class="font-bold mb-4">Tipo de conteúdo</h6>
          <ul>
              <li v-for="item in tiposFilter" :key="item.value" class="flex items-center cursor-pointer py-1" @click="refine(item.value)">
                  <feather-icon icon="CircleIcon" :svgClasses="[{ 'text-primary fill-current': item.isRefined}, 'h-5 w-5']" />
                  <span class="ml-2" :class="{'text-primary': item.isRefined}">{{ item.label }}</span>
              </li>
          </ul>
          <br>
          <br>
          <!-- CATEGORIES -->
          <h6 class="font-bold mb-4">Faixa de preço</h6>
          <ul>
              <li v-for="item in valuesFilter" :key="item.value" class="flex items-center cursor-pointer py-1" @click="refine(item.value)">
                  <feather-icon icon="CircleIcon" :svgClasses="[{ 'text-primary fill-current': item.isRefined}, 'h-5 w-5']" />
                  <span class="ml-2" :class="{'text-primary': item.isRefined}">{{ item.label }}</span>
              </li>
          </ul>
          <br>

          <vs-divider />

          <!--<vs-button class="w-full"  @click.prevent="refine" :disabled="!canRefine">Remove Filters</vs-button>-->
      </div>
      </vs-sidebar>

        <!-- RIGHT COL -->
        <div :class="{'sidebar-spacer-with-margin': clickNotClose}">

        <!-- SEARCH BAR -->
        <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
            <div class="relative mb-8">

                <!-- SEARCH INPUT -->
                <vs-input class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg" placeholder="Search here" v-model="currentRefinement" @input="refine($event)" @keyup.esc="refine('')" size="large" />

                <!-- SEARCH LOADING -->
                <p :hidden="!isSearchStalled" class="mt-4 text-grey">
                  <feather-icon icon="ClockIcon" svgClasses="w-4 h-4" class="mr-2 align-middle" />
                  <span>Loading...</span>
                </p>

                <!-- SEARCH ICON -->
                <div slot="submit-icon" class="absolute top-0 right-0 py-4 px-6" v-show="!currentRefinement">
                    <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
                </div>

                <!-- CLEAR INPUT ICON -->
                <div slot="reset-icon" class="absolute top-0 right-0 py-4 px-6" v-show="currentRefinement">
                    <feather-icon icon="XIcon" svgClasses="h-6 w-6 cursor-pointer" @click="refine('')" />
                </div>
            </div>
        </div>

        <div class="items-grid-view vx-row match-height" v-if="items.length" appear>
          <div class="vx-col lg:w-1/4 md:w-1/3 sm:w-1/2 w-full" v-for="item in items" :key="item.id">
              <item-grid-view :item="item">

                  <!-- SLOT: ACTION BUTTONS -->
                  <template slot="action-buttons">
                      <div class="flex flex-wrap">

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
            <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
        </vx-card>
      </div>
    </div>
</template>

<script>

export default {
  components: {
    ItemGridView: () => import("./components/ItemGridView.vue"),
    ItemListView: () => import("./components/ItemListView.vue"),
  },
  data() {
    return {
      items : [{
          id: 8,
          image: require("@/assets/images/pages/eCommerce/1.jpeg"),
          name: 'teste',
          rating: 4,
          price: 498.00,
          name: 'Nome do curso',
          description : 'brave descrição'
      },
        {
          id: 1,
          image: require("@/assets/images/pages/eCommerce/2.jpeg"),
          name: 'teste',
          rating: 3,
          price: 380.00,
          name: 'Nome do curso',
          description : 'brave descrição'
      },
        {
          id:2,
          image: require("@/assets/images/pages/eCommerce/3.jpeg"),
          name: 'teste',
          rating: 3,
          price: 760.00,
          name: 'Nome do curso',
          description : 'brave descrição'
      },
        {
          id: 3,
          image: require("@/assets/images/pages/eCommerce/4.jpeg"),
          name: 'teste',
          rating: 5,
          price: 1150.00,
          name: 'Nome do curso',
          description : 'brave descrição'
      }],
      valuesFilter : [
        {
          label: 'Todos',
          isRefined: true,
          value: 1,
        },{
          label: 'Até R$ 50,00',
          isRefined: false,
          value: 2,
        },{
          label: 'R$50,00 - R$ 100,00',
          isRefined: false,
          value: 3,
        },{
          label: 'R$100,00 - R$ 200,00',
          isRefined: false,
          value: 4,
        },
        {
          label: 'Acima de R$ 200,00',
          isRefined: false,
          value: 5,
        }
      ],
      tiposFilter : [
        {
          label: 'Todos',
          isRefined: true,
          value: 0,
        },{
          label: 'Curso',
          isRefined: false,
          value: 1,
        },{
          label: 'Mentoria',
          isRefined: false,
          value: 2,
        },{
          label: 'Setup',
          isRefined: false,
          value: 3,
        }
      ],
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      currentItemView: 'item-grid-view',
      numericItems: [
        { label: 'All' },
        { label: '<= $10', end: 10 },
        { label: '$10 - $100', start: 10, end: 100 },
        { label: '$100 - $500', start: 100, end: 500 },
        { label: '>= $500', start: 500 },
      ],
      algoliaCategories: [
        'hierarchicalCategories.lvl0',
        'hierarchicalCategories.lvl1',
        'hierarchicalCategories.lvl2',
        'hierarchicalCategories.lvl3',
      ]
    }
  },
  computed: {
    toValue() {
      return (value, range) => [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max,
      ]
    },

    // GRID VIEW
    isInCart() {
      return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
    },
    isInWishList() {
      return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
    },
    windowWidth() { return this.$store.state.windowWidth }
  },
  watch: {
    windowWidth() {
      this.setSidebarWidth()
    }
  },
  methods: {
    setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isFilterSidebarActive = this.clickNotClose = false
      } else {
        this.isFilterSidebarActive = this.clickNotClose = true
      }
    },

    // GRID VIEW - ACTIONS
    toggleFilterSidebar() {
      if (this.clickNotClose) return
      this.isFilterSidebarActive = !this.isFilterSidebarActive
    },
    toggleItemInWishList(item) {
      this.$store.dispatch('eCommerce/toggleItemInWishList', item)
    },
    additemInCart(item) {
      this.$store.dispatch('eCommerce/additemInCart', item)
    },
    cartButtonClicked(item) {
      this.$router.push({name: 'checkout', params: {content_id: item.id }}).catch(() => {})
      //this.isInCart(item.id) ? this.$router.push('/apps/eCommerce/checkout').catch(() => {}) : this.additemInCart(item)
    }
  },
  created() {
    this.setSidebarWidth()
  }
}

</script>


<style lang="scss">
#algolia-instant-search-demo {
  .algolia-header {
    .algolia-filters-label {
      width: calc(260px + 2.4rem);
    }
  }

  #algolia-content-container {
    .vs-sidebar {
      position: relative;
      float: left;
    }
  }

  .algolia-search-input-right-aligned-icon {
    padding: 1rem 1.5rem;
  }

  .algolia-price-slider {
    min-width: unset;
  }

  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
    min-width: 50%;
  }

  .item-view-secondary-action-btn {
    min-width: 50%;
  }
}

.theme-dark {
  #algolia-instant-search-demo {
    #algolia-content-container {
      .vs-sidebar {
        background-color: #10163a;
      }
    }
  }
}

@media (min-width: 992px) {
  .vs-sidebar-rounded {
    .vs-sidebar {
      border-radius: 0.5rem;
    }

    .vs-sidebar--items {
      border-radius: 0.5rem;
    }
  }
}

@media (max-width: 992px) {
  #algolia-content-container {
    .vs-sidebar {
      position: absolute !important;
      float: none !important;
    }
  }
}
</style>

