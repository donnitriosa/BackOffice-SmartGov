<template>
      <CDataTable
        :hover="hover"
        :fixed="fixed"
        :items="items"
        :fields="fields"
        :header="header"
      >
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">{{item.status}}</CBadge>
          </td>
        </template>
      </CDataTable>
</template>

<script>
export default {
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['nama', 'alamat', 'agama', 'kewarganegaraan']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    header: Boolean,
    border: Boolean,
    fixed: Boolean,
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    }
  }
}
</script>
