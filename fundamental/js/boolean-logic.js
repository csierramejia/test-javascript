(() => {
    'use strict'

    const isTrue = () => {
        console.log('is true');
        return true;
    };
    
    const isFalse = () => {
        console.log('is false');
        return false;
    };
    
    console.warn('And');
    isTrue() && isFalse();
    
    console.warn('OR');
    isFalse() || isTrue();
    console.log( isFalse() || isTrue() );
    
    const _undefined = undefined;
    const _null      = null;
    const _false     = false;
    
    const a = _false || _undefined || _null || 'Other';
    const b = _false || _undefined || isTrue() ||  _null || 'Other';
    const c = isTrue() || _false || _undefined || _null || 'Other';
    
    console.log( { a, b, c } );
})();
