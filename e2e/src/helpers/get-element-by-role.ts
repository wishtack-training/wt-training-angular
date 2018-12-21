import { by, element } from 'protractor';

export function getDataRoleSelector(role: string) {
    return by.css(`[data-role="${role}"]`);
}

export function getElementByRole(role: string) {
    return element(getDataRoleSelector(role));
}

export function getFirstElementByRole(role: string) {
    return element.all(getDataRoleSelector(role)).get(0);
}
