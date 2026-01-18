import { FilterOption } from '#utils/filterData';

interface Props {
    option: FilterOption;
    inputId: string;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
}

function Filter(props: Props) {
    const {
        option,
        inputId,
        checked,
        onChange,
        disabled = false,
    } = props;

    return (
        <label
            htmlFor={inputId}
            className={`flex items-center py-1.5 group ${disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
            }`}
        >
            <input
                id={inputId}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50 flex-shrink-0"
            />
            <span className={`ml-3 text-sm leading-relaxed ${disabled
                ? 'text-gray-400'
                : 'text-gray-700 hover:text-gray-900'
            }`}
            >
                {option.text}
            </span>
        </label>
    );
}

export default Filter;
