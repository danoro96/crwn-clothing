import React, { useState, useEffect } from 'react'
import './homepage.styles.scss'

import CustomButton from '../../components/custom-button/custom-button.component'

import { API, graphqlOperation } from 'aws-amplify'

import { listPosts } from '../../graphql/queries';
import { createPost } from '../../graphql/mutations';

export default function Contact(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        fetchUsers()
      });

    async function fetchUsers() {
        try {
         let users = await API.graphql(graphqlOperation(listPosts))
         console.log(users)
         users = users.data.listPosts.items
         setPosts( users )
        } catch(err) {
          console.log('error fetching users', err)
        }
      }

      async function createPosts() {
        try {
            let inputData = {
                title: 'testing all',
                blogID: 1234
            }
            await API.graphql(graphqlOperation(createPost, { input: inputData }))
            console.log('created')
        } catch(err) {
          console.log('error creating post', err)
        }
      }


    return(
        <div className='homepage'>
            <div>
            {
                    posts.map(({title}) => (
                        <div> { title } </div>
                    ))
                }
            </div>

            <div className='buttons'>
                <CustomButton onClick={createPosts}> Create new Post </CustomButton>
            </div>
            
        </div>
    )
}