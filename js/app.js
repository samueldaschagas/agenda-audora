(function(){
  'use strict';

   angular
    .module('agendaAudora', [])
      .controller('ControllerPrincipal', function DemoCtrl($scope) {
        $scope.objeto = [{
          'diaDaSemana': 'Hoje',
          'dataAgendamento': '20 de abril de 2015',
          'diasRestantes': 'Hoje',
          'listas': [{
              'hora': '12:00',
              'local': 'Santa Casa de Miséricordia de Maceió',
              'descricao': 'Requerimento de Baixa Complexidade',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/jack-bauer.jpg',
                'nome': 'Jack Bauer'
              },
              'finalizada': false,
              'desabilitaEditar': true,
              'desabilitaExcluir': true
            },
            {
              'hora': '13:15',
              'local': 'Atlântica Serviços e Transportes Ltda.',
              'descricao': 'Petição Inicial',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/sara.jpg',
                'nome': 'Sara Tancredi '
              },
              'finalizada': false
            },
            {
              'hora': '14:00',
              'local': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA',
              'descricao': 'Defesa Administrativa',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/michael-scofield.jpg',
                'nome': 'Michael Scofield'
              },
              'finalizada': true
            },
            {
              'hora': '17:00',
              'local': 'Santa Casa de Miséricordia',
              'descricao': 'Requerimento de Baixa Complexidade',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/lincoln.jpg',
                'nome': 'Lincoln Burrows'
              },
              'finalizada': false
            }]
        },
        {
          'diaDaSemana': 'Terça',
          'dataAgendamento': '21 de abril de 2015',
          'diasRestantes': '1 dia',
          'listas': [
            {
              'hora': '13:30',
              'local': 'Atlântica Serviços e Transportes Ltda.',
              'descricao': 'Apelação',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/kim.jpg',
                'nome': 'Kim Bauer'
              },
              'finalizada': false
            },
            {
              'hora': '14:00',
              'local': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA',
              'descricao': 'Defesa Administrativa',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/tbag.jpg',
                'nome': 'Theodore Bagwell'
              },
              'finalizada': true
            },
            {
              'hora': '15:45',
              'local': 'Construmais Empreendimentos Imobiliários Ltda',
              'descricao': 'Obtenção de Andamento de Processo',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/sucre.jpg',
                'nome': 'Fernando Sucre'
              },
              'finalizada': false
            }]
        },
        {
          'diaDaSemana': 'Quarta',
          'dataAgendamento': '22 de abril de 2015',
          'diasRestantes': '2 dias',
          'listas': [
            {
              'hora': '13:30',
              'local': 'Atlântica Serviços e Transportes Ltda.',
              'descricao': 'Apelação',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/sara.jpg',
                'nome': 'Sara Tancredi '
              },
              'finalizada': false
            },
            {
              'hora': '14:00',
              'local': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA',
              'descricao': 'Defesa Administrativa',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/michael-scofield.jpg',
                'nome': 'Michael Scofield'
              },
              'finalizada': true
            },
            {
              'hora': '15:45',
              'local': 'Construmais Empreendimentos Imobiliários Ltda',
              'descricao': 'Obtenção de Andamento de Processo',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/lincoln.jpg',
                'nome': 'Lincoln Burrows'
              },
              'finalizada': false
            },
            {
              'hora': '13:30',
              'local': 'Atlântica Serviços e Transportes Ltda.',
              'descricao': 'Apelação',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/sara.jpg',
                'nome': 'Sara Tancredi '
              },
              'finalizada': false
            },
            {
              'hora': '14:00',
              'local': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA',
              'descricao': 'Defesa Administrativa',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/michael-scofield.jpg',
                'nome': 'Michael Scofield'
              },
              'finalizada': true
            },
            {
              'hora': '15:45',
              'local': 'Construmais Empreendimentos Imobiliários Ltda',
              'descricao': 'Obtenção de Andamento de Processo',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/lincoln.jpg',
                'nome': 'Lincoln Burrows'
              },
              'finalizada': false
            }]
        },
        {
          'diaDaSemana': 'Quinta',
          'dataAgendamento': '24 de abril de 2015',
          'diasRestantes': '3 dias',
          'listas': [{
              'hora': '13:30',
              'local': 'Atlântica Serviços e Transportes Ltda.',
              'descricao': 'Apelação',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/sara.jpg',
                'nome': 'Sara Tancredi '
              },
              'finalizada': false
            },
            {
              'hora': '14:00',
              'local': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA',
              'descricao': 'Defesa Administrativa',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/michael-scofield.jpg',
                'nome': 'Michael Scofield'
              },
              'finalizada': true
            },
            {
              'hora': '15:45',
              'local': 'Construmais Empreendimentos Imobiliários Ltda',
              'descricao': 'Obtenção de Andamento de Processo',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/lincoln.jpg',
                'nome': 'Lincoln Burrows'
              },
              'finalizada': false
            }]
        },
        {
          'diaDaSemana': 'Terça',
          'dataAgendamento': '21 de maio de 2015',
          'diasRestantes': '1 mês',
          'listas': [{
              'hora': '13:30',
              'local': 'Atlântica Serviços e Transportes Ltda.',
              'descricao': 'Apelação',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/sara.jpg',
                'nome': 'Sara Tancredi '
              },
              'finalizada': false
            },
            {
              'hora': '14:00',
              'local': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA',
              'descricao': 'Defesa Administrativa',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/michael-scofield.jpg',
                'nome': 'Michael Scofield'
              },
              'finalizada': true
            },
            {
              'hora': '15:45',
              'local': 'Construmais Empreendimentos Imobiliários Ltda',
              'descricao': 'Obtenção de Andamento de Processo',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/lincoln.jpg',
                'nome': 'Lincoln Burrows'
              },
              'finalizada': false
            }]
        },
        {
          'diaDaSemana': 'Quinta',
          'dataAgendamento': '27 de agosto de 2015',
          'diasRestantes': '4 meses',
          'listas': [{
              'hora': '13:30',
              'local': 'Atlântica Serviços e Transportes Ltda.',
              'descricao': 'Apelação',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/sara.jpg',
                'nome': 'Sara Tancredi '
              },
              'finalizada': false
            },
            {
              'hora': '14:00',
              'local': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA',
              'descricao': 'Defesa Administrativa',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/michael-scofield.jpg',
                'nome': 'Michael Scofield'
              },
              'finalizada': true
            },
            {
              'hora': '15:45',
              'local': 'Construmais Empreendimentos Imobiliários Ltda',
              'descricao': 'Obtenção de Andamento de Processo',
              'detalhes': {
                  'id': 7854,
                  'processo': '[15054] - 080154-49.2014.4.05.8000',
                  'objeto': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
                  'parteContraria': 'Quitéria Maria da Conceição de Lima',
                  'instanciaAtual': '13ª Vara Federal de Alagoas',
                  'tipoIntimacao': 'Correspondência',
                  'dataIntimacao': '22/06/2015'
              },
              'responsavel': {
                'imagem': 'imgs/responsavel/lincoln.jpg',
                'nome': 'Lincoln Burrows'
              },
              'finalizada': false
            }]
        }];

      });

})();