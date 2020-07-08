import mock from 'mockjs'

import banners from './banner.json';
import floors from './floors.json';

mock.mock('/mock/banners',{code:200,message:'Success',data:banners})
mock.mock('/mock/floors',{code:200,message:'Success',data:floors})
