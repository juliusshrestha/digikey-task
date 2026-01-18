import React, { useState } from 'react';
import { SearchLineIcon } from '@ifrc-go/icons';
import {
    Button,
    DropdownMenu,
    Heading,
    IconButton,
    TextInput,
} from '@ifrc-go/ui';

import styles from './styles.module.css';

const noop = () => {};

function Navbar() {
    const [searchValue, setSearchValue] = useState<string | undefined>();
    return (
        <nav className={styles.navbar}>
            <Heading className={styles.title}>DigiKey</Heading>
            <div className={styles.searchInput}>
                <TextInput
                    name="search"
                    value={searchValue}
                    onChange={setSearchValue}
                />
                <div className={styles.icons}>
                    <IconButton
                        name={undefined}
                        onClick={noop}
                        title="Search button"
                        ariaLabel="Search button"
                        spacing="none"
                        variant="tertiary"
                    >
                        <SearchLineIcon />
                    </IconButton>
                </div>
            </div>
            <DropdownMenu
                variant="tertiary"
                label={(
                    <div className={styles.userInfo}>
                        <Heading level={6}>
                            Login or
                        </Heading>
                        <Heading level={4}>
                            REGISTER
                        </Heading>
                    </div>
                )}
            >
                <React.Fragment key=".0">
                    <Button
                        name="logout"
                        variant="tertiary"
                        className={styles.dropdownOption}
                        onClick={noop}
                    >
                        User
                    </Button>
                </React.Fragment>
            </DropdownMenu>
        </nav>
    );
}

export default Navbar;
