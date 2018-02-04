// Main navigation (currently supports max. 1 sub-level)
exports.navigationMain = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Link',
        href: '#'
    },
    {
        name: 'Disabled',
        href: '#',
        class: 'disabled'
    },
    {
        name: 'Dropdown',
        href: '#',
        childs: [
            {
                name: 'Action',
                href: '#'
            },
            {
                name: 'Another Action',
                href: '#'
            },
            {
                name: 'Something else here',
                href: '#'
            },
        ]
    }
]