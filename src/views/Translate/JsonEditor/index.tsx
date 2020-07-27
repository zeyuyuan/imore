import React, {useState} from 'react';
import AddLanguage from "./AddLanguage";
import {LanguageType} from "../../../types/translate";
import {getUuid} from "../../../utils";
import {exportToJsonFile} from "../../../utils/file";

const JsonEditor: React.FC = () => {
  const [languageTypes, setLanguageTypes] = useState([
    {
      id: '123123',
      key: 'zh',
      name: '中文',
      label: '中文',
      short: 'ZH',
      editing: false,
    },
    {
      id: '435y4gea',
      key: 'en',
      name: '英语',
      label: 'English',
      short: 'EN',
      editing: false,
    }
  ]);
  const [list] = useState([
    {
      id: getUuid(),
      key: 'hello',
      locales: [
        {
          language: {
            id: getUuid(),
            key: 'zh',
            name: '中文',
            label: '中文',
            short: 'ZH',
          },
          val: '你好',
        },
        {
          language: {
            id: getUuid(),
            key: 'en',
            name: '英文',
            label: 'English',
            short: 'EN',
          },
          val: 'Hello',
        },
      ],
      editing: false,
    },
  ]);
  const addLanguage = () => {
    const newLanguage: LanguageType = {
      id: getUuid(),
      key: 'en',
      name: '英文',
      label: 'English',
      short: 'EN',
      editing: true,
    };
    setLanguageTypes([
      ...languageTypes,
      newLanguage,
    ]);
  };
  const updateTarget = (val: LanguageType, index: number) => {
    setLanguageTypes([
      ...languageTypes.slice(0, index),
      val,
      ...languageTypes.slice(index + 1),
    ]);
  };
  const editTarget = (val: LanguageType, index: number) => {
    setLanguageTypes([
      ...languageTypes.slice(0, index),
      {
        ...val,
        editing: true,
      },
      ...languageTypes.slice(index + 1),
    ]);
  };
  const deleteTarget = (index: number) => {
    setLanguageTypes([
      ...languageTypes.slice(0, index),
      ...languageTypes.slice(index + 1),
    ]);
  };
  const list2Object = (list: any) => {
    const obj = {};
    list.forEach((item: any) => {
      Object.defineProperty(obj, item.key, {
        value: item.locales.find((i: any) => i.language.key === 'zh').val,
        enumerable: true,
      });
    });
    return obj;
  };
  const exportJsonFile = () => {
    exportToJsonFile(list2Object(list));
  };
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>序号</th>
          <th>字段名</th>
          {
            languageTypes.map((language, index) => (
              <th key={language.id}>
                {
                  language.editing ?
                    <AddLanguage
                      target={language}
                      onDone={(val) => updateTarget(val, index)}
                      onDelete={() => deleteTarget(index)}
                    />
                    :
                    <div
                      onClick={() => editTarget(language, index)}>{language.name || 'empty name'}</div>
                }
              </th>
            ))
          }
          <th>
            <button onClick={() => addLanguage()}>添加</button>
          </th>
        </tr>
        </thead>
        <tbody>
        {
          list.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.key}</td>
              {
                item.locales.map((locale) => (
                  <td key={locale.language.id}>{locale.val}</td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </table>
      <button>add line</button>
      <button onClick={() => exportJsonFile()}>export zh json file</button>
      <button disabled>import json file</button>
      <button disabled>import excel file</button>
      <button disabled>export excel file</button>
    </div>
  );
};

export default JsonEditor;
