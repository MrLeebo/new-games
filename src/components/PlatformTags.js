import React from 'react';
import { Badge } from 'reactstrap';
//import FA from 'react-fontawesome';
/*
function renderPlatform(platform) {
  switch (platform.abbreviation) {
    case "PC": return <FA name="desktop" />
    case "XONE": return <FA name="xbox" />
    case "PS4": return <FA name="playstation" />
    default: return platform.name
  }
}*/

export default function PlatformTags({platforms}) {
  return platforms && platforms.map(platform => <Badge key={platform.id} className="mx-1">{platform.name}</Badge>)
}
