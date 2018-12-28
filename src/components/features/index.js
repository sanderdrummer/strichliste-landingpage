import React from 'react'
import features from './features.json'
import { Card, ResponsiveGrid } from 'bricks-of-sand'

export default () => (
  <div>
    <h2>Features</h2>
    <ResponsiveGrid
      margin="1rem"
      gridGap="1rem"
      tabletColumns="1fr 1fr 1fr 1fr"
    >
      {features.map(feature => (
        <Card key={feature.title}>
          <h2>{feature.title}</h2>
          <p>{feature.text}</p>
        </Card>
      ))}
    </ResponsiveGrid>
  </div>
)
