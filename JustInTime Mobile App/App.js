import * as React from 'react';
import MainContainer from './src/navigation';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { useEffect } from 'react';
import { requestUserPermission } from './src/notifications/notifications';

export default function App() {
      useEffect(() =>{
        requestUserPermission()
      })

    return <MainContainer />;
}
