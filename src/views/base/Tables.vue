<template>
  <div>
    <CRow>
      <CCol>
        <CTableWrapper 
        :items="getData()"
        hover
      />
      </CCol>
    </CRow>

    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getData()"
          small
          caption="Condensed Table"
          :header="false"
        />
      </CCol>

      <CCol lg="6">
        <CTableWrapper
          :items="getData()"
          fixed
          border
          caption="Bordered Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getData()"
          hover
          striped
          border
          small
          fixed
          caption="Combined All Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getData()"
          hover
          striped
          border
          small
          fixed
          dark
          caption="Combined All dark Table"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from './Table.vue'
import usersData from '../users/UsersData'

export default {
  name: 'Tables',
  components: { CTableWrapper },
  methods: {
    getData (){
      return usersData.slice(0)
      console.log (usersData)
    }
    
  }
}
</script>
