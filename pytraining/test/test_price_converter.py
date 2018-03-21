# -*- coding: utf-8 -*-
#
# (c) 2013-2018 Wishtack
#
# $Id: $
#
from logging import Logger
from unittest import TestCase, skip

from mock import Mock, patch, call

from pytraining.src.bce import CurrencyInfo, Bce
from pytraining.src.price_converter import PriceConverter
from pytraining.src.price_factory import PriceFactory


def fake_get_currency_info(currency):

    if currency == 'EUR':
        return CurrencyInfo(rate=1.2, symbol='EURO')

    if currency == 'USD':
        return CurrencyInfo(rate=1, symbol='$')


class TestPriceConverter(TestCase):

    @patch.object(Bce, 'get_currency_info', side_effect=fake_get_currency_info)
    def test_convert_price_currency(self,
                                    mock_get_currency_info  # type: Mock
                                    ):

        converter = PriceConverter()
        factory = PriceFactory()

        # Act.
        price = factory.create_price_from_amount(amount=10, currency='EUR')
        converted_price = converter.convert_price(price=price, currency='USD')

        # Assert.
        self.assertEqual(12, converted_price.amount)
        self.assertEqual('USD', converted_price.currency)

        # Check mocks.
        self.assertEqual(2, mock_get_currency_info.call_count)
        mock_get_currency_info.assert_has_calls([
            call(currency='EUR'),
            call(currency='USD')
        ])

        mock_get_currency_info.reset_mock()

        price = factory.create_price_from_amount(amount=12, currency='USD')
        converted_price = converter.convert_price(price=price, currency='EUR')

        self.assertEqual(10, converted_price.amount)
        self.assertEqual('EUR', converted_price.currency)

        self.assertEqual(2, mock_get_currency_info.call_count)
        mock_get_currency_info.assert_has_calls([
            call(currency='USD'),
            call(currency='EUR')
        ])
