<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <div class="row">
          <div>
            <CHeaderNavItem class="d-md-down-none mx-2">
              <CHeaderNavLink>
                <span class="d-md-down-none">{{getUsername}}</span>
              </CHeaderNavLink>
            </CHeaderNavItem>
          </div>
          <div>
            <div class="c-avatar">
              <img src="img/avatars/6.jpg" class="c-avatar-img "/>
            </div>
          </div>
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Menu</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> Settings
    </CDropdownItem>
    <CDropdownItem  @click="logout">
      <CIcon name="cil-lock-locked"/> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  },
  computed: {
    getUsername () {
      return this.$store.getters.getUsername
    }
  },
  methods: {
    logout (){
      this.$router.push('/logout')
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>