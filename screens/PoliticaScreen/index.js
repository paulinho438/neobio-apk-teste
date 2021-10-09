import React, {useState, useEffect} from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Header,
    Body,
    Text,
    TextBold,
    TextBr,
    TextRed,
    BackButton,
    Scroller
} from './styled';

import { icons, COLORS, SIZES, FONTS } from '../../constants/'

export default () => {
    const navigation = useNavigation();
    const handleBackButton = () => {
        navigation.goBack();
    }

    function renderHeader() {
        

        return (
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 15,
                        marginRight: 15,
                    }}
                >
                    
                </View>

                
            </View>
        )
    }

    return (
        <Container>
            {renderHeader()}
            <Scroller>
            <Header>
                {/* <Image source={require('../../assets/val-p.png')} style={{width: 300, height:120}} /> */}
            </Header>
            <Body>
            <TextBold>Política de Privacidade Neobio Produtos para Laboratório</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Na Neobio Comércio de Produtos para Laboratório, privacidade e segurança são prioridades e
            nos comprometemos com a transparência do tratamento de dados pessoais dos nossos
            usuários/clientes. Por isso, esta presente Política de Privacidade estabelece como é feita a
            coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou usam
            nosso site.
            </Text>
            <TextBr></TextBr>
            <Text>Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações
            pessoais nas formas descritas nesta Política, sob as normas de Proteção de Dados (LGPD, Lei
            Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais
            normas do ordenamento jurídico brasileiro aplicáveis.
            </Text>
            <TextBr></TextBr>
            <Text>
            Dessa forma, a Neobio Comércio de Produtos para Laboratórios EIRELI EPP ©, doravante
            denominada simplesmente como “Neobio Produtos para laboratório”, inscrita no CNPJ/MF sob
            o nº 08.477.087/0001-02, no papel de Controladora de Dados, obriga-se ao disposto na
            presente Política de Privacidade.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>1. Quais dados coletamos sobre você e para qual finalidade?</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a prestação de
            serviços e aprimorar a experiência de uso.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>1.1. Dados pessoais fornecidos pelo titular</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Nome e endereço de e-mail para envio de conteúdos relevantes sobre nossos produtos, marcas
            e assuntos relacionados.</Text>
            <Text>
            Telefone para contato no caso do cliente solicitar atendimento.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>2. Como coletamos os seus dados?</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Nesse sentido, a coleta dos seus dados pessoais ocorre da seguinte forma:
            </Text>
            <TextBr></TextBr>
            <Text>Campo de “Newsletter”
            </Text>
            <TextBr></TextBr>
            <Text>Página de contato “Fale Conosco”</Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>2.1. Consentimento</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>É a partir do seu consentimento que tratamos os seus dados pessoais. O consentimento é a
            manifestação livre, informada e inequívoca pela qual você autoriza a Neobio Produtos para
            Laboratório a tratar seus dados.</Text>
            <TextBr></TextBr>
            <Text>Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados só serão coletados,
            tratados e armazenados mediante prévio e expresso consentimento.</Text>
            <TextBr></TextBr>
            <Text>O seu consentimento será obtido de forma específica para cada finalidade acima descrita,
            evidenciando o compromisso de transparência e boa-fé da Neobio Produtos para Laboratório
            para com seus usuários/clientes, seguindo as regulações legislativas pertinentes.
            </Text>
            <TextBr></TextBr>
            <Text>Ao utilizar os serviços da Neobio Produtos para Laboratório e fornecer seus dados pessoais,
            você está ciente e consentindo com as disposições desta Política de Privacidade, além de
            conhecer seus direitos e como exercê-los.
            </Text>
            <TextBr></TextBr>
            <Text>A qualquer tempo e sem nenhum custo, você poderá revogar seu consentimento.</Text>
            <TextBr></TextBr>
            <Text>É importante destacar que a revogação do consentimento para o tratamento dos dados pode
            implicar a impossibilidade da performance adequada de alguma funcionalidade do site que
            dependa da operação. Tais consequências serão informadas previamente.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>3. Quais são os seus direitos?
            </TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>A Neobio Produtos para Laboratório assegura a seus usuários/clientes seus direitos de titular
            previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa forma, você pode, de maneira
            gratuita e a qualquer tempo:</Text>
            <TextBr></TextBr>
            <Text>Confirmar a existência de tratamento de dados, de maneira simplificada ou em formato claro e
            completo.
            </Text>
            <TextBr></TextBr>
            <Text>Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio
            eletrônico, seguro e idôneo.
            </Text>
            <TextBr></TextBr>
            <Text>Corrigir seus dados, ao solicitar a edição, correção ou atualização destes.
            </Text>
            <TextBr></TextBr>
            <Text>Limitar seus dados quando desnecessários, excessivos ou tratados em desconformidade com a
            legislação através da anonimização, bloqueio ou eliminação.
            </Text>
            <TextBr></TextBr>
            <Text>Solicitar a portabilidade de seus dados, através de um relatório de dados cadastrais que a
            Neobio Produtos para Laboratório trata a seu respeito.
            </Text>
            <TextBr></TextBr>
            <Text>Eliminar seus dados tratados a partir de seu consentimento, exceto nos casos previstos em lei.
            </Text>
            <TextBr></TextBr>
            <Text>Revogar seu consentimento, desautorizando o tratamento de seus dados.
            </Text>
            <TextBr></TextBr>
            <Text>Informar-se sobre a possibilidade de não fornecer seu consentimento e sobre as consequências
            da negativa.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>4. Como você pode exercer seus direitos de titular?</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Para exercer seus direitos de titular, você deve entrar em contato com a Neobio Produtos para
            Laboratório através dos seguintes meios disponíveis:
            </Text>
            <TextBr></TextBr>
            <Text>neobio@neobio.com.br
            </Text>
            <TextBr></TextBr>
            <Text>+55 (14) 99663 1749
            </Text>
            <TextBr></TextBr>
            <Text>+55 (14) 3880 5999
            </Text>
            <TextBr></TextBr>
            <Text>De forma a garantir a sua correta identificação como titular dos dados pessoais objeto da
            solicitação, é possível que solicitemos documentos ou demais comprovações que possam
            comprovar sua identidade. Nessa hipótese, você será informado previamente.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>5. Como e por quanto tempo seus dados serão armazenados?</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Seus dados pessoais coletados pela Neobio Produtos para Laboratório serão utilizados e
            armazenados durante o tempo necessário para a prestação do serviço ou para que as
            finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os
            direitos dos titulares dos dados e dos controladores.
            </Text>
            <TextBr></TextBr>
            <Text>De modo geral, seus dados serão mantidos enquanto a relação contratual entre você e a (nome
            empresarial simplificado) perdurar. Findado o período de armazenamento dos dados pessoais,
            estes serão excluídos de nossas bases de dados ou anonimizados, ressalvadas as hipóteses
            legalmente previstas no artigo 16 lei geral de proteção de dados, a saber:
            </Text>
            <TextBr></TextBr>
            <Text>I – cumprimento de obrigação legal ou regulatória pelo controlador;
            </Text>
            <TextBr></TextBr>
            <Text>II – estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados
            pessoais;
            </Text>
            <TextBr></TextBr>
            <Text>III – transferência a terceiro, desde que respeitados os requisitos de tratamento de dados
            dispostos nesta Lei; ou
            </Text>
            <TextBr></TextBr>
            <Text>IV – uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados
            os dados.
            </Text>
            <TextBr></TextBr>
            <Text>Isto é, informações pessoais sobre você que sejam imprescindíveis para o cumprimento de
            determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em
            processos judiciais e administrativos serão mantidas, a despeito da exclusão dos demais dados.
            </Text>
            <TextBr></TextBr>
            <Text>O armazenamento de dados coletados pela Neobio Produtos para Laboratório reflete o nosso
            compromisso com a segurança e privacidade dos seus dados. Empregamos medidas e soluções
            técnicas de proteção aptas a garantir a confidencialidade, integridade e inviolabilidade dos seus
            dados. Além disso, também contamos com medidas de segurança apropriadas aos riscos e com
            controle de acesso às informações armazenadas.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>6. O que fazemos para manter seus dados seguros?</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e
            gerenciais orientadas para a proteção da sua privacidade.
            </Text>
            <TextBr></TextBr>
            <Text>Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais
            coletados, o contexto e a finalidade do tratamento e os riscos que eventuais violações gerariam
            para os direitos e liberdades do titular dos dados coletados e tratados.
            </Text>
            <TextBr></TextBr>
            <Text>Entre as medidas que adotamos, destacamos as seguintes:
            </Text>
            <TextBr></TextBr>
            <Text>Apenas pessoas autorizadas têm acesso a seus dados pessoais
            </Text>
            <TextBr></TextBr>
            <Text>O acesso a seus dados pessoais é feito somente após o compromisso de confidencialidade
            </Text>
            <TextBr></TextBr>
            <Text>Seus dados pessoais são armazenados em ambiente seguro e idôneo.
            </Text>
            <TextBr></TextBr>
            <Text>A Neobio Produtos para Laboratório se compromete a adotar as melhores posturas para evitar
            incidentes de segurança. Contudo, é necessário destacar que nenhuma página virtual é
            inteiramente segura e livre de riscos. É possível que, apesar de todos os nossos protocolos de
            segurança, problemas de culpa exclusivamente de terceiros ocorram, como ataques
            cibernéticos de hackers, ou também em decorrência da negligência ou imprudência do próprio
            usuário/cliente.
            </Text>
            <TextBr></TextBr>
            <Text>Em caso de incidentes de segurança que possa gerar risco ou dano relevante para você ou
            qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade
            Nacional de Proteção de Dados sobre o ocorrido, em consonância com as disposições da Lei
            Geral de Proteção de Dados.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>7. Com quem seus dados podem ser compartilhados?</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Tendo em vista a preservação de sua privacidade, a Neobio Produtos para Laboratório não
            compartilhará seus dados pessoais com nenhum terceiro não autorizado.
            </Text>
            <TextBr></TextBr>
            <Text>Seus dados poderão ser compartilhados com nossos parceiros comerciais. Estes recebem seus
            dados apenas na medida do necessário para a prestação dos serviços contratados e nossos
            contratos são orientados pelas normas de proteção de dados do ordenamento jurídico
            brasileiro.
            </Text>
            <TextBr></TextBr>
            <Text>Todavia, nossos parceiros têm suas próprias Políticas de Privacidade, que podem divergir desta.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Além disso, também existem outras hipóteses em que seus dados poderão ser compartilhados,
            que são:
            </Text>
            <TextBr></TextBr>
            <Text>I – Determinação legal, requerimento, requisição ou ordem judicial, com autoridades judiciais,
            administrativas ou governamentais competentes.
            </Text>
            <TextBr></TextBr>
            <Text>II – Caso de movimentações societárias, como fusão, aquisição e incorporação, de forma
            automática
            </Text>
            <TextBr></TextBr>
            <Text>III – Proteção dos direitos da Neobio Produtos para Laboratório em qualquer tipo de conflito,
            inclusive os de teor judicial.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>7.1. Transferência internacional de dados</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Alguns dos terceiros com quem compartilhamos seus dados podem ser localizados ou possuir
            instalações localizadas em países estrangeiros. Nessas condições, de toda forma, seus dados
            pessoais estarão sujeitos à Lei Geral de Proteção de Dados e às demais legislações brasileiras
            de proteção de dados.
            </Text>
            <TextBr></TextBr>
            <Text>Nesse sentido, a Neobio Produtos para Laboratório se compromete a sempre adotar eficientes
            padrões de segurança cibernética e de proteção de dados, nos melhores esforços de garantir e
            cumprir as exigências legislativas.
            </Text>
            <TextBr></TextBr>
            <Text>Ao concordar com essa Política de Privacidade, você concorda com esse compartilhamento,
            que se dará conforme as finalidades descritas no presente instrumento.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>8. Cookies ou dados de navegação</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>A Neobio Produtos para Laboratório faz uso de Cookies, que são arquivos de texto enviados
            pela plataforma ao seu computador e que nele se armazenam, que contém informações
            relacionadas à navegação do site. Em suma, os Cookies são utilizados para aprimorar a
            experiência de uso.
            </Text>
            <TextBr></TextBr>
            <Text>Ao acessar nosso site e consentir com o uso de Cookies, você manifesta conhecer e aceitar a
            utilização de um sistema de coleta de dados de navegação com o uso de Cookies em seu
            dispositivo.
            </Text>
            <TextBr></TextBr>
            <Text>Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar
            os Cookies. Todavia, a revogação do consentimento de determinados Cookies pode inviabilizar
            o funcionamento correto de alguns recursos da plataforma.
            </Text>
            <TextBr></TextBr>
            <Text>Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas configurações do
            navegador, na área de gestão de Cookies. Você pode acessar tutoriais sobre o tema
            diretamente nos links abaixo:
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Se você usa o Internet Explorer.
            </Text>
            <TextBr></TextBr>
            <Text>https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043
            d-7c16-ede5947fc64d
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Se você usa o Firefox.
            </Text>
            <TextBr></TextBr>
            <Text>https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Se você usa o Safari.
            </Text>
            <TextBr></TextBr>
            <Text>https://support.apple.com/pt-br/guide/safari/sfri11471/mac
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Se você usa o Google Chrome.
            </Text>
            <TextBr></TextBr>
            <Text>https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&h
            l=pt-BR
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>9. Alteração desta Política de Privacidade</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>A atual versão da Política de Privacidade foi formulada e atualizada pela última vez em: (dia de
            mês de ano).
            </Text>
            <TextBr></TextBr>
            <Text>Reservamos o direito de modificar essa Política de Privacidade a qualquer tempo,
            principalmente em função da adequação a eventuais alterações feitas em nosso site ou em
            âmbito legislativo. Recomendamos que você a revise com frequência.
            </Text>
            <TextBr></TextBr>
            <Text>Eventuais alterações entrarão em vigor a partir de sua publicação em nosso site e sempre lhe
            notificaremos acerca das mudanças ocorridas.
            </Text>
            <TextBr></TextBr>
            <Text>Ao utilizar nossos serviços e fornecer seus dados pessoais após tais modificações, você as
            consente.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>10. Responsabilidade</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>A Neobio Produtos para Laboratório prevê a responsabilidade dos agentes que atuam nos
            processos de tratamento de dados, em conformidade com os artigos 42 ao 45 da Lei Geral de
            Proteção de Dados.
            </Text>
            <TextBr></TextBr>
            <Text>Nos comprometemos em manter esta Política de Privacidade atualizada, observando suas
            disposições e zelando por seu cumprimento.
            </Text>
            <TextBr></TextBr>
            <Text>Além disso, também assumimos o compromisso de buscar condições técnicas e organizativas
            seguramente aptas a proteger todo o processo de tratamento de dados.
            </Text>
            <TextBr></TextBr>
            <Text>Caso a Autoridade Nacional de Proteção de Dados exija a adoção de providências em relação
            ao tratamento de dados realizado pela Neobio Produtos para Laboratório, comprometemo-nos
            a segui-las.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>10.1 Isenção de responsabilidade</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>Conforme mencionado no Tópico 6, embora adotemos elevados padrões de segurança a fim de
            evitar incidentes, não há nenhuma página virtual inteiramente livre de riscos. Nesse sentido, a
            Neobio Produtos para Laboratório não se responsabiliza por:
            </Text>
            <TextBr></TextBr>
            <Text>I – Quaisquer consequências decorrentes da negligência, imprudência ou imperícia dos
            usuários em relação a seus dados individuais. Garantimos e nos responsabilizamos apenas pela
            segurança dos processos de tratamento de dados e do cumprimento das finalidades descritas
            no presente instrumento.
            </Text>
            <TextBr></TextBr>
            <Text>II – Ações maliciosas de terceiros, como ataques de hackers, exceto se comprovada conduta
            culposa ou deliberada da Neobio Produtos para Laboratório.
            </Text>
            <TextBr></TextBr>
            <Text>III – Inveracidade das informações inseridas pelo usuário/cliente nos registros necessários para
            a utilização dos serviços da Neobio Produtos para Laboratório; quaisquer consequências
            decorrentes de informações falsas ou inseridas de má-fé são de inteiramente responsabilidade
            do usuário/cliente.
            </Text>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <TextBold>11. Encarregado de Proteção de Dados</TextBold>
            <TextBr></TextBr>
            <TextBr></TextBr>
            <Text>A Neobio Produtos para Laboratório disponibiliza os seguintes meios para que você possa
            nosco para exercer seus direitos de titular:
            </Text>
            <TextBr></TextBr>
            <Text>neobio@neobio.com.br
            </Text>
            <TextBr></TextBr>
            <Text>+55 (14) 99663 1749
            </Text>
            <TextBr></TextBr>
            <Text>+55 (14) 3880 5999
            </Text>
            <TextBr></TextBr>
            <Text>Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que
            tratamos, você pode entrar em contato com o nosso Encarregado de Proteção de Dados
            Pessoais, através dos seguintes canais:
            </Text>
            <TextBr></TextBr>
            <Text>Conforme mencionado no Tópico 6, embora adotemos elevados padrões de segurança a fim de
            evitar incidentes, não há nenhuma página virtual inteiramente livre de riscos. Nesse sentido, a
            Neobio Produtos para Laboratório não se responsabiliza por:
            </Text>
            <TextBr></TextBr>
            <Text>neobio@neobio.com.br
            </Text>
            <TextBr></TextBr>
            <Text>+55 (14) 99663 1749
            </Text>
            <TextBr></TextBr>
            <Text>+55 (14) 3880 5999
            </Text>
            <TextBold>Última modificação: 14/09/2021</TextBold>
            </Body>
            </Scroller>
        </Container>
    );
}