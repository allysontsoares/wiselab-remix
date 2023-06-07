
import { siteConfig } from "~/lib/config";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../base/hover-card";
import { Avatar } from "../base/avatar";
import { CalendarDays } from "lucide-react";
import { Icons } from "~/components/icons";
import { Link } from "@remix-run/react";

export function Logo() {

    const hoje = new Date();
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const diaDaSemana = diasDaSemana[hoje.getDay()];
    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();
    const data = `${diaDaSemana}, ${dia} de ${mes} de ${ano}`;


    return (

        <HoverCard>
            <HoverCardTrigger asChild>
                <Link to="/" className="flex items-center space-x-2">
                    <Icons.wiselabLogo className="w-full h-8 md:pl-5" />
                    {/* <span className="hidden font-bold text-brand-950 dark:text-neutral-300 sm:inline-block">
                        {siteConfig.name}
                    </span> */}
                </Link>
            </HoverCardTrigger>
            <HoverCardContent className="border bg-neutral-100 w-80 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700">
                <div className="flex justify-between space-x-4">
                    <Avatar className="flex items-center justify-center bg-white">
                        <Icons.logo className="w-6 h-6 text-brand-500" />
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">WiseLab - Monitor de backups</h4>
                        <p className="text-sm">
                            Sistema para monitoramente de backups do LIS WiseLab by BemSoft Sistemas.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="w-4 h-4 mr-2 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                                {data}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
