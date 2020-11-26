import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import {
  Container,
  Header,
  TableContainer,
  Modal,
  ModalContainer,
  ModalHeader,
  ModalContent,
  Name,
  WrapperInfo,
  Cnpj,
  Category,
  ModalFooter
} from './styles';

interface Supplier {
  id?: number;
  name?: string;
  document?: string;
  uf?: string;
  category?: string;
  totalProducts?: number;
}

interface Product {
  id: number;
  name: string;
  code: string;
  category: string;
  provider_id: number;
}

const Suppliers: React.FC = () => {
  
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const { register, handleSubmit } = useForm<Supplier>();

  const onSubmit = ({name, document, category}: Supplier) => {
    setSuppliers([...suppliers, { name, document, category }]);
    /* Produtos não poderão ser cadastrados utilizando o nome desses novos fornecedores. 
       pois ao atualizar a página eles são deletados. Para serem reconhecidos na página do 
       cadastro de produtos, poderíamos armazenar no local storage, mas como o correto mesmo
       seria armazenar no servidor, não implementei essa funcionalidade localmente */
  };

  useEffect(()=> {
    async function loadSuppliers(): Promise<void> {
      const { data: suppliersData } = await api.get('/providers');

      const { data: productsData } = await api.get('/products');

      const suppliersExtraInfo = suppliersData.map((supplier: Supplier) => {
        const productSupplier = productsData.find((prod: Product) => {
          return prod.provider_id === supplier.id;
        });

        const category = productSupplier? productSupplier.category : 'Não cadastrada';

        const totalProducts = productsData.filter((prod: Product) => {
          return prod.provider_id === supplier.id;
        }).length;

        return { ...supplier, category, totalProducts };
      });

      setSuppliers(suppliersExtraInfo);
    }

    loadSuppliers();

  }, []);

    return (
        <Container>
          <Header>
              <h1>Fornecedores</h1>
              <button onClick={() => setIsShowingModal(true)}>Cadastrar fornecedor</button>
          </Header>

          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CNPJ</th>
                  <th>Categoria</th>
                  <th>Total de produtos</th>
                </tr>
              </thead>

              <tbody>
                {suppliers.map((supplier: Supplier) => (
                  <tr key={supplier.id}>
                    <td>{supplier.name}</td>
                    <td>{supplier.document}</td>
                    <td>{supplier.category}</td>
                    <td>{supplier.totalProducts}</td>
                  </tr>
                ))}
              </tbody>
           </table>
          </TableContainer>

          <Modal showModal={isShowingModal}>
            <ModalContainer>
              <ModalHeader>
                <h2>Cadastrar Fornecedor</h2>
                <button onClick={() => setIsShowingModal(false)}>x</button>
              </ModalHeader>

              <ModalContent onSubmit={handleSubmit(onSubmit)}>
                <Name>
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Insira o nome do fornecedor"
                    ref={register}
                  />
                </Name>
                <WrapperInfo>
                  <Cnpj>
                    <label  htmlFor="document">CNPJ</label>
                    <input type="text" name="document" id="document" ref={register}/>
                  </Cnpj>
                  <Category>
                    <label  htmlFor="category">Categoria</label>
                    <input type="text" name="category" id="category" ref={register} />
                  </Category>
                </WrapperInfo>

                <ModalFooter>
                  <button type="submit" onClick={() => setIsShowingModal(false)}>Cadastrar</button>
                </ModalFooter>

              </ModalContent>
            </ModalContainer>
          </Modal>
        </Container>
    );
}

export default Suppliers;