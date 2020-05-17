import React from 'react'
import {
  TitleSlide,
  CenteredPlainLayout,
  CameraImage,
  Alert,
  AlertSlide,
  AlertDescription,
  List,
  ListItem,
  IconText,
  Text,
} from './blocks'
import { SlideProps, Fragment } from '@saitonakamura/presa'
import { CenteredLayout } from '@saitonakamura/presa/lib/components/slide/layouts'

export const CheckRecordSlide = (
  <TitleSlide name='Проверяем запись' title='Проверить, идет ли запись!'>
    <CenteredPlainLayout>
      <CameraImage />
    </CenteredPlainLayout>
  </TitleSlide>
)

export const CheckSoundVideoSlide = (
  <AlertSlide name='Проверяем связь'>
    <Alert>
      Меня хорошо видно && слышно?
      <AlertDescription>
        Ставьте ➕ , если все хорошо
        <br />
        Напишите в чат, если есть проблемы
      </AlertDescription>
    </Alert>
  </AlertSlide>
)

export const RulesSlide = (
  <TitleSlide name='Правила' title='Правила вебинара'>
    <List>
      <Fragment>
        <ListItem>
          <IconText icon='talk'>Активно участвуем</IconText>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <IconText icon='questions'>Задаем вопрос в чат или голосом</IconText>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <IconText icon='slack'>
            Off-topic обсуждаем в Slack #канал группы или #general
          </IconText>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <IconText icon='time'>
            Вопросы вижу в чате, могу ответить не сразу
          </IconText>
        </ListItem>
      </Fragment>
    </List>
  </TitleSlide>
)

export const MicrophoneSlide = (props: SlideProps & { title: string }) => (
  <TitleSlide title={props.title} layout={CenteredLayout}>
    <Text size={150}>🎤</Text>
  </TitleSlide>
)

export const QuestionsSlide = (
  <MicrophoneSlide name='Вопросы' title='Какие вопросы есть?' />
)
