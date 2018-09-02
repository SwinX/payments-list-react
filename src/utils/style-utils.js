import _ from 'lodash';

export function concatClasses(...styles) {
    return _(styles)
        .compact()
        .join(' ');
}
