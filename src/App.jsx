import './App.css'
import './index.css'
import { useState } from 'react'

import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){

    const users=[
        {
            userName:'midudev',
            name:'Miguel Angel Duran',
            isFollowing: true
        },
        {
            userName:'pheralb',
            name:'Pablo Hernandez',
            isFollowing: false            
        },
        {
            userName:'Elon Musk',
            name:'Elon Musk',
            isFollowing: false
        }
        ,
        {
            userName:'unknown',
            name:'Usuario Desconocido',
            isFollowing: true
        }
    ]

    return(
        <section className='App'>
            {
                users.map(user => {
                    const {userName,name,isFollowing}=user
                    return(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>

                    )
                })
            }
        </section>
        )
}