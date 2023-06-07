import { BanknotesIcon, BeakerIcon, DocumentTextIcon, PlusCircleIcon, RectangleStackIcon } from "@heroicons/react/24/outline";


export const siteConfig = {
  name: "WiseLab Web",
  description: "Sistema para gerenciamento de laboratórios de análises clínicas",
};


export const navigationMenu = [
  { name: 'Dashboard', href: '/', icon: <RectangleStackIcon className="mr-2 h-5 w-5" />, visible: true },
  {
    name: 'Cadastro', href: '#', icon: <PlusCircleIcon className="mr-2 h-5 w-5" />, visible: true,
    subItems: [
      { name: 'Clientes', href: '/clientes', icon: <PlusCircleIcon className="mr-2 h-5 w-5" />, visible: true },
      { name: 'Médicos', href: '#', icon: <PlusCircleIcon className="mr-2 h-5 w-5" />, visible: true },
      { name: 'Exames', href: '#', icon: <PlusCircleIcon className="mr-2 h-5 w-5" />, visible: true }
    ]
  },
  { name: 'Geren. de exames', href: '/gerenciamento-exames', icon: <BeakerIcon className="mr-2 h-5 w-5" />, visible: true },
  { name: 'Recepção de pedidos', href: '/recepcao-pedidos', icon: <DocumentTextIcon className="mr-2 h-5 w-5" />, visible: true },
  {
    name: 'Controle de caixa', href: '#', icon: <BanknotesIcon className="mr-2 h-5 w-5" />, visible: true,
    subItems: [
      { name: 'Fluxo de caixa', href: '#', icon: <PlusCircleIcon className="mr-2 h-5 w-5" />, visible: true },
      { name: 'Contas à pagar', href: '#', icon: <PlusCircleIcon className="mr-2 h-5 w-5" />, visible: true },
      { name: 'Contas à receber', href: '#', icon: <PlusCircleIcon className="mr-2 h-5 w-5" />, visible: true }
    ]
  },
]


