import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import api from '../../services/api';

import filter from '../../assets/filter.svg';

import {
  Container,
  Header,
  Functions,
  TableContainer,
  Modal,
  ModalContainer,
  ModalHeader,
  ModalContent,
  Name,
  Provider,
  WrapperInfo,
  Cnpj,
  Category,
  ModalFooter
} from './styles';

interface Supplier {
  id: number;
  name: string;
  document: string;
  uf: string;
  category?: string;
  totalProducts?: number;
}

interface Product {
  id?: number;
  name?: string;
  code?: string;
  category?: string;
  provider?: string;
  provider_id?: number;
}

const Products: React.FC = () => {
  
  const [products, setProducts] = useState<Product[]>([]);

  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isShowingModal2, setIsShowingModal2] = useState(false);

  const { register, handleSubmit } = useForm<Product>();
  const { register: registerFilter, handleSubmit: handleSubmitFilter } = useForm<Product>();

  const onSubmit = async ({name, provider: supplierName, code, category}: Product) => {
    const { data: suppliersData } = await api.get('/providers');

    const supplierExist = suppliersData.find((supplier: Supplier) => {
      return supplierName === supplier.name;
    });

    if(supplierExist) {
      setProducts([...products, { name, provider: supplierName, code, category }]);
    } else {
      toast.error('Fornecedor inválido!');
    }
  };

  const onSubmitFilter = async ({name: key}: Product) => {
    const productsFiltered = products.filter(((product: Product) => {
      return product.provider === key;
    }));
    
    if(productsFiltered.length > 0) {
      setProducts(productsFiltered);
    } else {
      toast.error('Fornecedor não encontrado');
    }
  }

  useEffect(()=> {
    async function loadProducts(): Promise<void> {
      const { data: productsData } = await api.get('/products');

      const { data: suppliersData } = await api.get('/providers');

      const productsExtraInfo = productsData.map((product: Product) => {
        const supplier = suppliersData.find((supp: Supplier) => {
          return product.provider_id === supp.id;
        });

        return {...product, provider: supplier.name};
      });
      
      setProducts(productsExtraInfo);
    }

    loadProducts();

  }, []);

    return (
        <Container>
          <Header>
              <h1>Produtos</h1>
              <Functions>
                <img alt="Filter" src={filter}  onClick={() => setIsShowingModal2(true)} />
                <button  onClick={() => setIsShowingModal(true)}>Cadastrar produto</button>
              </Functions>
          </Header>

          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Código</th>
                  <th>Categoria</th>
                  <th>Fornecedor</th>
                </tr>
              </thead>

              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td>{product.category}</td>
                    <td>{product.provider}</td>
                  </tr>
                ))}
              </tbody>
           </table>
          </TableContainer>

          <Modal showModal={isShowingModal}>
            <ModalContainer>
              <ModalHeader>
                <h2>Cadastrar Produto</h2>
                <button onClick={() => setIsShowingModal(false)}>x</button>
              </ModalHeader>

              <ModalContent onSubmit={handleSubmit(onSubmit)}>
              <Name>
                  <label htmlFor="name">Nome do produto</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Insira o nome do produto"
                    ref={register}
                  />
                </Name>
                <Provider>
                  <label htmlFor="provider">Nome do fornecedor</label>
                  <input
                    type="text"
                    name="provider"
                    id="provider"
                    placeholder="Insira o nome do fornecedor"
                    ref={register}
                  />
                </Provider>
                <WrapperInfo>
                  <Cnpj>
                    <label  htmlFor="code">Código do Produto</label>
                    <input type="text" name="code" id="code" ref={register}/>
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


          <Modal showModal={isShowingModal2}>
            <ModalContainer>
              <ModalHeader>
                <h2>Filtrar por Fornecedor</h2>
                <button onClick={() => setIsShowingModal2(false)}>x</button>
              </ModalHeader>

              <ModalContent onSubmit={handleSubmitFilter(onSubmitFilter)}>
                <Name>
                  <label htmlFor="filter">Nome</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Selecione o fornecedor"
                    ref={registerFilter}
                  />
                </Name>
                <ModalFooter>
                  <button type="submit" onClick={() => setIsShowingModal2(false)}>Filtrar</button>
                </ModalFooter>

              </ModalContent>
            </ModalContainer>
          </Modal>
        </Container>
    );
}

export default Products;