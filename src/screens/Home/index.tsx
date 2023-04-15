import { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import { Plus } from 'phosphor-react-native';
import { Container, Body, Title, ListCheckLists, ButtonAdd } from './styles'

import Header from '../../components/Header';
import ButtonList from '../../components/ButtonList';

import { ChecklistDTO } from '../../dto/ChecklistDTO';

import { listCheckList } from '../../databases/offline/repositorio/Repository';
import { synchronizeDatabases } from '../../databases/online/useCases/UseCases';

import theme from '../../theme';
import Splash from '../Splash';
import { Alert } from 'react-native';

export default function Home() {
  const { navigate } = useNavigation<any>();
  const isFocused = useIsFocused();
  const { isConnected } = useNetInfo();
  const [loading, setLoading] = useState(true);
  const [listChecklist, setListChecklist] = useState<ChecklistDTO[]>([]);

  function handleButtonAdd() {
    navigate('CreateCheckList')
  }

  async function connectionOffline() {
    try {
      const checklists = await listCheckList();
      setListChecklist(checklists.toJSON());

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function connectionOnline() {
    setTimeout(async () => {
      try {
        const checklists = await listCheckList();
        setListChecklist(checklists.toJSON())

        const checklistUpdated = await synchronizeDatabases(checklists.toJSON());
        
        setListChecklist(checklistUpdated.toJSON());

        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    })
  }

  useEffect(() => {
    if (isFocused) {
      if (isConnected) {
        connectionOnline();
      }
      if (isConnected === false) {
        connectionOffline();
        return Alert.alert('Atenção', 'Você está offline!');
      }
    }
  }, [isFocused, isConnected]);

  return (
    <>
      {
        loading ?
          <Splash />
          :
          <Container>
            <Header />
            <Body>
              <Title>Checklists ({listChecklist?.length})</Title>
              <ListCheckLists
                data={listChecklist}
                renderItem={({ item }) => <ButtonList data={item} />}
                keyExtractor={(item: ChecklistDTO) => item._id}
              />
              <ButtonAdd onPress={handleButtonAdd}>
                <Plus
                  color={theme.colors.white}
                  weight="bold"
                  size={30}
                />
              </ButtonAdd>
            </Body>
          </Container>
      }
    </>
  );
}