import { FilterOption } from '#utils/filterData';

interface Props {
    option: FilterOption;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
}

function Filter(props: Props) {
    const {
        option,
        checked,
        onChange,
        disabled = false,
    } = props;

    return (
        <label
            htmlFor={`filter-${option.value}`}
            className={`flex items-center py-1 px-1 rounded group ${disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer hover:bg-gray-50'
            }`}
        >
            <input
                id={`filter-${option.value}`}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <span className={`ml-2 text-sm flex-1 ${disabled
                ? 'text-gray-400'
                : 'text-gray-700 group-hover:text-gray-900'
            }`}
            >
                {option.text}
            </span>
        </label>
    );
}

export default Filter;
