// --- Bloco novo: wrapper do Select do Base UI para manter o design do projeto consistente ---
// O objetivo aqui é substituir o select nativo por um dropdown customizado, com borda, hover, texto e opções mais alinhados ao restante da interface.
import { Select } from '@base-ui/react/select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Container principal do select personalizado ---
export function SelectRoot(props: Select.Root.Props<string, false>) {
    return <Select.Root data-slot='select-root' {...props} />;
}

// --- Trigger (campo visível que abre o dropdown) ---
export function SelectTrigger({
    className,
    children,
    ...props
}: Select.Trigger.Props) {
    return (
        <Select.Trigger
            data-slot='select-trigger'
            className={cn(
                // A borda, o espaçamento e o fundo do campo seguem o padrão dos inputs da tela.
                'flex h-8 w-50 items-center justify-between gap-2 rounded-md border-2 border-blue-950 bg-white px-4 text-left text-blue-950 transition-colors outline-none hover:bg-blue-50/60 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2',
                className,
            )}
            {...props}
        >
            {children}
            <Select.Icon className='flex h-4 w-4 items-center justify-center text-blue-950'>
                <ChevronDown className='h-4 w-4' />
            </Select.Icon>
        </Select.Trigger>
    );
}

// --- Texto exibido no trigger quando nenhuma opção está selecionada ---
export function SelectValue({ className, ...props }: Select.Value.Props) {
    return (
        <Select.Value
            data-slot='select-value'
            className={cn('font-(family-name:--font-jost) text-blue-950 data-[placeholder]:text-blue-950/50', className)}
            {...props}
        />
    );
}

// --- Portal que renderiza o menu do dropdown fora do fluxo da página ---
export function SelectPortal(props: Select.Portal.Props) {
    return <Select.Portal {...props} />;
}

// --- Posicionador do dropdown para calcular a posição junto ao trigger ---
export function SelectPositioner({ className, ...props }: Select.Positioner.Props) {
    return (
        <Select.Positioner
            data-slot='select-positioner'
            className={cn('z-50', className)}
            {...props}
        />
    );
}

// --- Conteúdo do dropdown com fundo claro, borda azul e sombra sutil ---
export function SelectPopup({ className, ...props }: Select.Popup.Props) {
    return (
        <Select.Popup
            data-slot='select-popup'
            className={cn(
                'min-w-[var(--anchor-width)] rounded-lg border-2 border-blue-950 bg-white p-1.5 text-blue-950 shadow-lg outline-none',
                className,
            )}
            {...props}
        />
    );
}

// --- Item da lista com hover e seleção em azul-marinho conforme o design do projeto ---
export function SelectItem({ className, children, ...props }: Select.Item.Props) {
    return (
        <Select.Item
            data-slot='select-item'
            className={cn(
                'group relative flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-(family-name:--font-jost) text-blue-950 outline-none transition-colors data-[highlighted]:bg-blue-50 data-[selected]:bg-blue-950 data-[selected]:text-white',
                className,
            )}
            {...props}
        >
            <span className='flex-1'>{children}</span>
            <Select.ItemIndicator className='flex h-4 w-4 items-center justify-center text-current'>
                <Check className='h-3.5 w-3.5' />
            </Select.ItemIndicator>
        </Select.Item>
    );
}
