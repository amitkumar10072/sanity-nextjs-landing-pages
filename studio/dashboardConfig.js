export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea73e13b31d545f0f3d8478',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5jw1s554',
                  apiId: 'c178fa29-3029-498b-9a0a-c95ee3b80e29'
                },
                {
                  buildHookId: '5ea73e131903677a83216587',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hi4iidow',
                  apiId: 'e4b2315c-297c-438a-8be9-0b2b0b3f4940'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amitkumar10072/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hi4iidow.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
