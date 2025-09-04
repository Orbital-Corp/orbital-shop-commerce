import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Aceitação dos Termos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Ao acessar e usar a Orbital Shop, você aceita e concorda em estar vinculado aos 
                termos e condições descritos neste documento. Se você não concordar com qualquer 
                parte destes termos, não deverá usar nossos serviços.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descrição dos Serviços</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                A Orbital Shop é uma plataforma de e-commerce que oferece produtos digitais e 
                serviços online. Nossos produtos incluem, mas não se limitam a:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>E-books e materiais educacionais</li>
                <li>Cursos online</li>
                <li>Consultoria especializada</li>
                <li>Templates e recursos digitais</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Conta do Usuário</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Para utilizar nossos serviços, você deve criar uma conta fornecendo informações 
                verdadeiras e atualizadas. Você é responsável por:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Pagamentos e Reembolsos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Os pagamentos são processados através de gateways seguros (Mercado Pago e EFI). 
                Nossa política de reembolso é a seguinte:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Produtos digitais: 7 dias para arrependimento após a compra</li>
                <li>Serviços: Política específica conforme descrito no produto</li>
                <li>Reembolsos são processados em até 7 dias úteis</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Propriedade Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Todos os produtos e conteúdos disponibilizados na Orbital Shop são protegidos 
                por direitos autorais. É proibido:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Reproduzir, distribuir ou modificar nossos produtos sem autorização</li>
                <li>Compartilhar credenciais de acesso</li>
                <li>Fazer engenharia reversa de nossos produtos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                A Orbital Shop não será responsável por danos indiretos, incidentais ou 
                consequenciais decorrentes do uso de nossos serviços. Nossa responsabilidade 
                total está limitada ao valor pago pelo produto ou serviço.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Respeitamos sua privacidade e protegemos seus dados pessoais de acordo com 
                a Lei Geral de Proteção de Dados (LGPD). Coletamos apenas as informações 
                necessárias para fornecer nossos serviços.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Alterações dos Termos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação. 
                O uso contínuo dos serviços constitui aceitação dos novos termos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contato</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Para dúvidas ou questões relacionadas a estes termos, entre em contato conosco:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Email: contato@orbitalshop.com</li>
                <li>Telefone: (11) 99999-9999</li>
                <li>Endereço: São Paulo, SP</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}