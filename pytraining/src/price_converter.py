# -*- coding: utf-8 -*-
#
# (c) 2013-2018 Wishtack
#
# $Id: $
#
from pytraining.src.bce import Bce
from pytraining.src.price_factory import PriceFactory


class PriceConverter(object):

    def convert_price(self, price, currency):

        bce = Bce()

        source_currency_info = bce.get_currency_info(currency=price.currency)
        target_currency_info = bce.get_currency_info(currency=currency)

        amount = price.amount * source_currency_info.rate / target_currency_info.rate

        return PriceFactory().create_price_from_amount(amount=amount, currency=currency)
