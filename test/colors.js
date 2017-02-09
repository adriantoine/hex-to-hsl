import test from 'ava';
import hexToHsl from '../index';

test('converts blue', t => {
	t.deepEqual(hexToHsl('#0593FF'), [205.92, 100, 51]);
});

test('converts green', t => {
	t.deepEqual(hexToHsl('#00C176'), [156.68393782383419, 100, 38]);
});

test('converts orange', t => {
	t.deepEqual(hexToHsl('#FF8A00'), [32.470588235294116, 100, 50]);
});

test('converts purple', t => {
	t.deepEqual(hexToHsl('#A900C7'), [290.95477386934675, 100, 40]);
});

test('converts red', t => {
	t.deepEqual(hexToHsl('#FF003C'), [345.88235294117646, 100, 50]);
});
