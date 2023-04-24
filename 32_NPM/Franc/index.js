import {franc, francAll} from 'franc'
import langs from 'langs';
import 'colors';

const input = process.argv[2];

const langCode = franc(input, {minLength: 5});

if(langCode === 'und') {
  console.log('문자열을 더 길게 입력하세요'.red);
}else {
  try {
    const language = langs.where("3", langCode);
    console.log(`추측결과 : ${language.name.rainbow}!!!`);
  } catch(error) {
    console.log(error);
  }
}