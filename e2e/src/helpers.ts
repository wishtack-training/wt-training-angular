import { by } from 'protractor';

export function getRoleSelector(role) {
    return `[data-role="${role}"]`;
}

export function getRoleLocator(role) {
    return by.css(getRoleSelector(role));
}