import React from 'react'
import users from './users.json'
import { Card, AutoGrid } from 'bricks-of-sand'
export default () => (
  <div>
    <h2>Users</h2>
    <AutoGrid>
      {users.map(user => (
        <a href={user.link} target="_blank">
          <Card>{user.name}</Card>
        </a>
      ))}
    </AutoGrid>
  </div>
)
