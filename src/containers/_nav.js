export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Home',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Permintaan KTP Baru',
        to: '/ktp-baru',
        icon: 'cil-tag'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Migrasi KTP',
        // to: '/#',
        icon: 'cil-lightbulb'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Update Data KTP',
        // to: '/#',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Pelaporan KTP Hilang',
        // to: '/#',
        icon: 'cil-recycle'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Articles',
        // to: '/#',
        icon: 'cil-book'
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-3'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Settings',
        // to: '/#',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Logout',
        to: '/Logout',
        icon: 'cil-account-logout'
      }
    ]
  }
]