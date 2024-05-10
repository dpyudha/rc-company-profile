import Link from 'next/link'
import { connect } from 'react-redux'

import Counter from './counter'
import Clock from './clock'
import Header from './header'
import Head from 'next/head'

import styled from 'styled-components'
import { CursorProvider } from 'react-cursor-custom'

const Div = styled.div`
.movable {
  width: 40px;
  height: 40px;
  border:2px solid ;
  position: absolute;
  z-index: 999999999;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: background 0.5s;
  &:before {
    content:"";
    display:block;
    position:absolute;
    left:0;
    right:0;
    margin:0 auto;
    top : 50%;
    transform:translateY(-50%);
    width:5px;
    height:5px;
    border-radius:50%;
    background-color:#000;
  }
}
cursor:none;
.movable.active {
  background: red;
}

.movable.active:after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.movable.cursor-pointer {
  border:2px solid red;
}

`;
function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title,
  children
}) {
  return (
    <div>
      
      <Head>
        <title>Omnicreativora</title>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="/static/css/reset.css" rel="stylesheet"/>
        <link href="/static/css/font.css" rel="stylesheet"/>
        <script src="https://apps.elfsight.com/p/platform.js" defer/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CursorProvider noRing={false} ringSize="50">
      <Header/>
      {children}
      </CursorProvider>
      
    </div>
  )
}

export default connect(state => state)(Page)
